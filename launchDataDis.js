// these functions and class will allow the data to be displayed and updated every 5 seconds

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//function to obtain data from the dataLoader.js file
function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ":</td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

//used to update the clock Time
function updateDisplay(){
    theTime = new Date();
    console.log("The Time is: " + theTime.getHours() + ":" + 
    (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + 
    ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds() ));

    document.getElementById("timeStamp").innerHTML = 
    theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + 
    ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds() );


//update the table
var timeRead = data[index].time_seconds


if(timeRead >= 10){
    //undate the table here
    document.getElementById("data").rows["seconds"].innerHTML = 
    dataRow("Time Elapsed", data[index].time_seconds, "seconds");

    document.getElementById("data").rows["latitude"].innerHTML = 
    dataRow("Latitude", data[index].latitude, " ");

    document.getElementById("data").rows["longitude"].innerHTML = 
    dataRow("Longitude", data[index].longitude, " ");

    document.getElementById("data").rows["gpsSensor_alt"].innerHTML = 
    dataRow("gps Altitude", data[index].gps_altitude, " ");

    document.getElementById("data").rows["bmpSensor_alt"].innerHTML = 
    dataRow("bmp Altitude", data[index].bmpSensor_altitude, " ");

    document.getElementById("data").rows["bmpSensor_pres"].innerHTML = 
    dataRow("bmp Pressure", data[index].bmpSensor_pressure, " ");

    document.getElementById("data").rows["bmpSensor_temp"].innerHTML = 
    dataRow("bmp Tempreture", data[index].bmpSensor_temp, " ");

    document.getElementById("data").rows["digSensor_temp"].innerHTML = 
    dataRow("Digital Tempreture", data[index].digSensor_temp, " ");

    document.getElementById("data").rows["cssSensor_temp"].innerHTML = 
    dataRow("css Tempreture", data[index].cssSensor_temp, " ");

    document.getElementById("data").rows["cssSensor_eC02"].innerHTML = 
    dataRow("css eC02", data[index].cssSensor_eCO2, " ");

    document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = 
    dataRow("css TVOCs ", data[index].cssSensor_TVOC, " ");

    document.getElementById("data").rows["UV"].innerHTML = 
    dataRow("UV", data[index].UV, " ");

    document.getElementById("data").rows["accelX"].innerHTML = 
    dataRow("acceleration in X", data[index].accelX, " ");

    document.getElementById("data").rows["accelY"].innerHTML = 
    dataRow("acceleration in Y", data[index].accelY, " ");

    document.getElementById("data").rows["accelZ"].innerHTML = 
    dataRow("acceleration in Z", data[index].accelZ, " ");

    document.getElementById("data").rows["magneticX"].innerHTML = 
    dataRow("magnetic in X", data[index].magneticX, " ");

    document.getElementById("data").rows["magneticY"].innerHTML = 
    dataRow("magnetic in Y", data[index].magneticY, " ");

    document.getElementById("data").rows["magneticZ"].innerHTML = 
    dataRow("magnetic in Z", data[index].magneticZ, " ");

    document.getElementById("data").rows["gyroX"].innerHTML = 
    dataRow("gyro in X", data[index].gyroX, " ");

    document.getElementById("data").rows["gyroY"].innerHTML = 
    dataRow("gyro in Y", data[index].gyroY, " ");

    document.getElementById("data").rows["gyroZ"].innerHTML = 
    dataRow("gyro in Z", data[index].gyroZ, " ");

}

if (index >= 500 ){
    index = 0;
} else {
    index++;
}

}
