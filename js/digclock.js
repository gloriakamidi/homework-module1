// Create a time data function
function currentTime() {
  //Declare variables
  var d = new Date(); //Get current date
  var hr = d.getHours(); //Get current hours
  var min = d.getMinutes(); //Get current minutes
  var sec = d.getSeconds(); //Get current seconds
  var ampm; //Declare empty variable to store AM or PM
  // Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  // Add 0 to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }
  // Determine AM or PM string
  if (hr == 12) {
    ampm = "PM"; //Set to PM
  } else if (hr > 12) {
    hr -= 12; //Deduct 12 from hours greater than 12 (military time)
    ampm = "PM"; //Set to PM
  } else {
    ampm = "AM"; //Set to AM
  }
  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm;
  //Display current local time and time zone on HTML  elements
  document.getElementById("clock").innerText = time; //adding time
  //Run time data function every 1 second
  setInterval(currentTime, 1000); //setting timer

  var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
  var timeDiff; //To store time difference between GMT hour and Local hour
  var adjTimeDiff; //To store time difference converted to poaitive number
  var timeZone; //To store the 4 timr zones (PT,MT,CT,ET)

  var offset = date.getTimezoneOffset();
  d.set;
  console.log("UTC: " + d);

  // Paris -> +2 UTC
  var parisOffset = 2 + 60;
  d.setMInutes(d.getMinutes() + parisOffset);
  console.log("Paris: " + d);

  //Convert Greenwich time from military time to standard time
  if (utchr > 12) {
    utchr -= 12;
  }
  timeDiff = utchr - hr;
  adjTimeDiff = Math.abs(timrDiff);

  if (adjTimeDiff === 0) {
    timeZone = UTC;
  } else if (adjTimeDiff === -5) {
    timeZone = "ET";
  } else if (adjTimeDiff === -6) {
    timeZone = "CT";
  } else if (adjTImeDiff === -7) {
    timeZone = "MT";
  } else if (adjTimeDiff === -8) {
    timeZone = "PT";
  } else {
    timeZone = "";
  }
  let text = d.toUTCString();
  document.getElementById("demo").innerHTML = text;

  // Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

  //Display current time format to display
  document.getElementById("clock").innerText = time; //adding time
}
//Initial run of time data function
currentTime();
