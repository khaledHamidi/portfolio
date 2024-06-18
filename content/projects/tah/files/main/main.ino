//Project by Khalid Hamidi ,,, ميكاترونكس ,, جامعى الشام العالمية

#include <EEPROM.h>
#include <SHT1x.h>

// Specify data and clock connections and instantiate SHT1x object
#define dataPin  10
#define clockPin 11
SHT1x sht1x(dataPin, clockPin);


#define EnableAddress 0
#define HeatingAddress 1
#define Delayddress 2
int delayTime=100;
  double temp_c;
  double temp_f;
  double humidity;

int incomingByte = 0;   // for incoming serial data

bool IsEnabled=true;


void setup()
{
  //Delayddress
   Serial.begin(38400); // Open serial connection to report values to host
   pinMode(12,OUTPUT);
  IsEnabled=EEPROM.read(EnableAddress);
   
   if(IsEnabled)
   {
      digitalWrite(12,HIGH);
   }
    delayTime =EEPROM.read( Delayddress);
}
 
  
void Heating(bool val)
{
  EEPROM.write(HeatingAddress,val);
  // 

}
int Delay=3000;
void loop()
{
 // Serial.print(EEPROM.read(0),DEC);
  
  if (Serial.available() > 0) 
  {
                // read the incoming byte:
                
                incomingByte = Serial.read();
                switch(incomingByte)
                {
                  case 49:
                  {
                    digitalWrite(12,HIGH); 
                    IsEnabled==true;
                    EEPROM.write(EnableAddress,true);
                    return;
                }
                case 48:
                {
                  digitalWrite(12,LOW);
                  IsEnabled==false;
                    EEPROM.write(EnableAddress,false);
                  return;
                }

                case 51: //heating on ..
                {
                  Heating(true);
                  return;
                }
                case 52: //heating off..
                {
               
                   Heating(false  );
                  return;
                }
                default :
                {
                  Delay=incomingByte*10;
                  
                }
              }
  }
   
  if(IsEnabled==true)
  {
 
  // Read values from the sensor
  temp_c = sht1x.readTemperatureC();
  temp_f = sht1x.readTemperatureF();
  humidity = sht1x.readHumidity();
  if(humidity <0 || temp_c==-40.01)
  {
  return;
    
  }

  
  Serial.print(temp_c);
  Serial.print(" ");
  Serial.print(humidity);
  Serial.print("p");
  }
  delay(Delay);
}
