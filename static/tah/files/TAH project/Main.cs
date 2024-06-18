using LiveCharts;
using LiveCharts.Wpf;
using System;
using System.Collections.Generic;
using System.IO.Ports;
using System.Text;
using System.Windows.Forms;
using System.Windows.Media;
using System.Xml.Serialization;
using TAH_project.Serial;
using Brushes = System.Windows.Media.Brushes;
using Color = System.Windows.Media.Color;

namespace TAH_project
{
    public partial class Main : Form
    {

        SerialPortManager SPManager;
        string[] rites = new string[] { "38400", "9600", "4800" };
        string time = "0";
        Single temp
        {
            get { return _temp; }
            set { _temp = value; DataReceived(); }
        }
        Single _temp = 0;
        Single humitidy = 0;
        bool Recording = false;
        List<TempObject> datarec = new List<TempObject>();

        #region Main
        public Main()
        {

            InitializeComponent();
            var E1 = ConnectionSettings();
            if (E1 == null)
            {
                var E2 = SerialSettings();
                if (E2 != null)
                    MessageBox.Show(E2);
            }
            else
                MessageBox.Show("ConnectionSettings" + "  -  " + E1);
            StartPointer();

        }

        private string ConnectionSettings()
        {
            try
            {
                portbox.Items.Clear();

                string[] portNames = SerialPort.GetPortNames();     //<-- Reads all available comPorts
                                                                    //  if(portNa)
                foreach (var portName in portNames)
                {
                    portbox.Items.Add(portName);                  //<-- Adds Ports to combobox
                }
                portbox.SelectedIndex = 0;                        //<-- Selects first entry (convenience purposes)
                riteBox.Items.Clear();
                riteBox.Items.AddRange(rites);
                riteBox.SelectedIndex = 0;
                return null;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }


        }
        /// <summary>
        /// Serial Manager 
        /// </summary>

        private string SerialSettings()
        {
            try
            {
                SPManager = new SerialPortManager();
                BindingSource serialSettingsBindingSource = new BindingSource();

                SPManager.NewSerialDataRecieved += new EventHandler<SerialDataEventArgs>(_spManager_NewSerialDataRecieved);
                //   SPManager.StartListening();
                return null;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

        }
        #endregion


        private void Main_Load(object sender, EventArgs e) { TimeDraw2(); }

        SeriesCollection ViewSeries = new SeriesCollection
            {
                new LineSeries
                {
                    Title = "Temp",
                    Values =new ChartValues<float> {}
                },                new LineSeries
                {

                    Title = "Humidity",
                    Values =new ChartValues<float> {}
                }

            };

        bool TimeDraw = true;
        private void button6_Click(object sender, EventArgs e)
        {
            TimeDraw2();
            TimeDraw = true;
            button6.Enabled = false;
        }
        AxesCollection AX = new AxesCollection
            {
         new Axis
        {
            Title = "Time (sec)",
            Labels = new List<string> {"s","t","u"  },
            FontSize = 13

        }
        };
        private void TimeDraw2()
        {
            //  Tchart.AxisY.Clear();
            //   Tchart.AxisX.Clear();
            Tchart.Series.Clear();
            Tchart.Series = ViewSeries;
            Tchart.AxisX = AX;

        }

        private void button3_Click(object sender, EventArgs e)
        {
            ViewSeries[0].Values.Add(33f);
            //     AX[0].Labels.Add("88");
        }
        private void StartPointer()
        {
            ReadData();
            AngularHimidity();
            AngularTemp();

            Tchart.LegendLocation = LegendLocation.Bottom;
            Tchart.Zoom = ZoomingOptions.Xy;
        }

        public void DataReceived()
        {

            if (Recording)
            {
                time = DateTime.Now.ToString("hh:mm:ss");
                datarec.Add(new TempObject { HUMITIDY = humitidy, TIME = time, TEMP = temp });
            }

            if (angularGauge1.InvokeRequired)
            {
                angularGauge1.Invoke(new MethodInvoker(delegate { angularGauge1.Value = temp; label1.Text = angularGauge1.Value.ToString("##.##"); }));
            }
            else
            {
                angularGauge1.Value = temp;
                label1.Text = angularGauge1.Value.ToString("##.##");
            }
            if (angularGauge2.InvokeRequired)
            {
                angularGauge2.Invoke(new MethodInvoker(delegate
                {
                    angularGauge2.Value = humitidy; label2.Text = angularGauge2.Value.ToString("##.##")
    ;
                }));
            }
            else
            {
                angularGauge2.Value = humitidy;
                label2.Text = angularGauge2.Value.ToString("##.##");
            }

            if (TimeDraw)
            {

                ViewSeries[0].Values.Add(temp);
                ViewSeries[1].Values.Add(humitidy);
                AX[0].Labels.Add(DateTime.Now.ToString("hh:mm:ss"));
            }

        }



        #region Serial ...

        string[] data = new string[] { "", "" };
        String alldata;

        void _spManager_NewSerialDataRecieved(object sender, SerialDataEventArgs e)
        {
            string dataString;
            dataString = Encoding.ASCII.GetString(e.Data);
            alldata += (dataString);

            // new Thread(cc).Start();
            //       new Thread(DataReceived).Start();
            cc();

        }
        private void SetText2(string text)


        {
            if (this.DataWord.InvokeRequired)
            {
                SetTextCallback d = new SetTextCallback(SetText2);
                this.Invoke(d, new object[] { text });
            }
            else
            {
                richTextBox1.Text = alldata;
            }
        }
        private void cc()
        {

            SetText2(alldata);
            if (!alldata.EndsWith("p")) //16.20 66.01p
                return;

            SetText(alldata.ToString());
            try
            {
                data = DataWord.Text.Split(' ');
                if (string.IsNullOrEmpty(data[0]))
                    return;
                humitidy = Convert.ToSingle(data[1]);

                if (humitidy < 0)
                    humitidy = 0;
                temp = Convert.ToSingle(data[0]);

            }
            catch (Exception ex)
            {
          //      MessageBox.Show("DATA ERROR : " + ex.Message);
                //  new Thread(s).Start;
            }
        }

        private void s() { }

        delegate void SetTextCallback(string text);
        private void SetText(string text)
        {
            if (this.DataWord.InvokeRequired)
            {
                SetTextCallback d = new SetTextCallback(SetText);
                this.Invoke(d, new object[] { text });
            }
            else
            {
                try
                {
                    DataWord.Text = ((alldata.Substring(alldata.Length - 14, 13)));
                    string[] s = DataWord.Text.Split('p');
                    DataWord.Text = s.Length == 1 ? s[0] : s[1];
                }
                catch
                {

                }
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            button1.Enabled = false;
            button1.Text = "Saved !";
            SPManager.PortName = portbox.SelectedItem.ToString();
            SPManager.Rite = Convert.ToInt32(riteBox.SelectedItem);
            SPManager.StartListening();
        }
        private void button2_Click(object sender, EventArgs e)
        {
            SPManager.RestartListening();
        }

        #endregion


        #region Chart 

        private void Draw()
        {
            Tchart.Series = new SeriesCollection
            {
                new LineSeries
                {

                    Title = "Temp",
                    Values = tempData
                },
                new LineSeries
                {

                    Title = "Humidity",
                    Values = HumData
                }

            };
            //     Tchart.AxisX.Clear();
            Tchart.AxisX = new AxesCollection{new Axis
            {
                Title = "Time (sec)",
                Labels = TimeData,
                FontSize = 13


            } }; ;
        }

        private void TchartClick(object sender, ChartPoint chartPoint)
        {
            MessageBox.Show("At point : " + chartPoint.X + "\n , Humidity : " + chartPoint.Y + " % ");
        }


        List<TempObject> Data;
        List<string> TimeData = new List<string>();
        ChartValues<Single> HumData = new ChartValues<Single>();
        ChartValues<Single> tempData = new ChartValues<Single>();

        #endregion



        #region DATA STORAGE
        public void ReadData()
        {

            XmlSerializer serial = new XmlSerializer(typeof(List<TempObject>));
            System.IO.StreamReader reader = new System.IO.StreamReader("data.xml");
            Data = (List<TempObject>)serial.Deserialize(reader);
            reader.Close();

        }


        public void WriteData()
        {
            XmlSerializer serial = new XmlSerializer(datarec.GetType());
            System.IO.StreamWriter writer = new System.IO.StreamWriter("data.xml");
            serial.Serialize(writer, datarec);
            writer.Close();
            datarec.Clear();
        }
        #endregion


        public class TempObject
        {
            public Single TEMP { get; set; }
            public string TIME { get; set; }
            public Single HUMITIDY { get; set; }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (((Button)sender).Text == "START")
            {
                ((Button)sender).Text = "STOP";
                Recording = true;
            }
            else
            {
                ((Button)sender).Text = "START";
                Recording = false;
                WriteData();
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            TimeDraw = false;
            ReadData();
            tempData.Clear();
            HumData.Clear();
            TimeData.Clear();
            foreach (TempObject item in Data)
            {
                TimeData.Add(item.TIME);
                HumData.Add(item.HUMITIDY);
                tempData.Add(item.TEMP);
            }
            Draw();


        }


        public void AngularHimidity()
        {
            angularGauge2.LabelsStep = 10;
            angularGauge2.Value = -25;
            angularGauge2.FromValue = 0;
            angularGauge2.ToValue = 100;
            angularGauge2.TicksForeground = Brushes.White;
            angularGauge2.Base.Foreground = Brushes.White;
            angularGauge2.Base.FontWeight = System.Windows.FontWeights.Bold;
            angularGauge2.Base.FontSize = 16;
            angularGauge2.SectionsInnerRadius = 0.5;
            angularGauge2.Sections.Add(new AngularSection
            {
                FromValue = 0,
                ToValue = 1,
                Fill = new SolidColorBrush(Color.FromRgb(55, 23, 200))
            });
            angularGauge2.Sections.Add(new AngularSection
            {
                FromValue = 1,
                ToValue = 99,
                Fill = new SolidColorBrush(Color.FromRgb(102, 204, 255))
            }); angularGauge2.Sections.Add(new AngularSection
            {
                FromValue = 99,
                ToValue = 100,
                Fill = new SolidColorBrush(Color.FromRgb(254, 20, 20))
            });
        }


        public void AngularTemp()
        {
            angularGauge1.LabelsStep = 12;
            //   angularGauge1.Value = 25;
            angularGauge1.FromValue = -40;
            angularGauge1.ToValue = 100;
            angularGauge1.TicksForeground = Brushes.White;
            angularGauge1.Base.Foreground = Brushes.White;
            angularGauge1.Base.FontWeight = System.Windows.FontWeights.Bold;
            angularGauge1.Base.FontSize = 16;
            angularGauge1.SectionsInnerRadius = 0.5;
            angularGauge1.Sections.Add(new AngularSection
            {
                FromValue = -40,
                ToValue = 1,
                Fill = new SolidColorBrush(Color.FromRgb(55, 81, 200))
            });
            angularGauge1.Sections.Add(new AngularSection
            {
                FromValue = 1,
                ToValue = 15,
                Fill = new SolidColorBrush(Color.FromRgb(102, 204, 255))
            });

            angularGauge1.Sections.Add(new AngularSection
            {
                FromValue = 15,
                ToValue = 39,
                Fill = new SolidColorBrush(Color.FromRgb(92, 177, 255))
            }); angularGauge1.Sections.Add(new AngularSection
            {
                FromValue = 40,
                ToValue = 100,
                Fill = new SolidColorBrush(Color.FromRgb(254, 57, 57))
            });
        }

        private void Main_FormClosed(object sender, FormClosedEventArgs e)
        {
            Application.Exit();

        }

        private void Main_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void angularGauge1_ChildChanged(object sender, System.Windows.Forms.Integration.ChildChangedEventArgs e)
        {

        }

        private void Tchart_ChildChanged(object sender, System.Windows.Forms.Integration.ChildChangedEventArgs e)
        {

        }

        private void trackBar1_Scroll(object sender, EventArgs e)
        {
            label5.Text = label5.Text == "OFF" ? "ON" : "OFF";
            if (label5.Text == "ON")
            {
                SPManager._serialPort.Write(new char[] { '1' }, 0, 1);
            }
            else
            {
                SPManager._serialPort.Write(new char[] { '0' }, 0, 1);

            }
        }

        private void trackBar2_Scroll(object sender, EventArgs e)
        {
            label6.Text = label5.Text == "HEATING OFF" ? "HEATING ON" : "HEATING OFF";
            if (label6.Text == "HEATING ON")
            {
                SPManager._serialPort.Write(new char[] { '3' }, 0, 1); //51
            }
            else
            {
                SPManager._serialPort.Write(new char[] { '4' }, 0, 1); //52

            }

        }

        private void button3_Click_1(object sender, EventArgs e)
        {
            char s = System.Text.Encoding.ASCII.GetString(new byte[] { Convert.ToByte(textBox1.Text) })[0];
            // ( (int)(textBox1.Text.ToCharArray())).ToString() );
            SPManager._serialPort.Write(new char[] { s }, 0, 1); //52

        }
    }
}
