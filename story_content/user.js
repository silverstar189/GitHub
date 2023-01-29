function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gopwnmof8k":
        Script1();
        break;
      case "6itjYRxG3Hv":
        Script2();
        break;
      case "5h2Cyrf5QVp":
        Script3();
        break;
      case "6fSw6PhxgdA":
        Script4();
        break;
      case "6mFCxc8QoL7":
        Script5();
        break;
      case "6qw8nRCb9Jl":
        Script6();
        break;
      case "6LK0lO0Bq2M":
        Script7();
        break;
      case "5WcvJtpjL1J":
        Script8();
        break;
      case "5ZN7ra1cnjZ":
        Script9();
        break;
      case "5fgZtgaJdBR":
        Script10();
        break;
      case "6KzsAWGKpKd":
        Script11();
        break;
      case "5tmxN38rKEJ":
        Script12();
        break;
      case "5kM5Uf1sN43":
        Script13();
        break;
      case "6ple6qKwoeP":
        Script14();
        break;
      case "6PLwmCxh62u":
        Script15();
        break;
      case "6FZgiBctl8m":
        Script16();
        break;
      case "5mnS04hod8t":
        Script17();
        break;
      case "5tfbld2GVe7":
        Script18();
        break;
      case "6ms7abiPSAP":
        Script19();
        break;
      case "5qScbRLu8Mu":
        Script20();
        break;
      case "5YCMGH3UcSu":
        Script21();
        break;
      case "6Y5teRSghqF":
        Script22();
        break;
      case "5npkyJWUVKo":
        Script23();
        break;
      case "6I86s3bvTyn":
        Script24();
        break;
      case "5zLz66MzQUM":
        Script25();
        break;
      case "5aIfmrzC3jF":
        Script26();
        break;
      case "5zwuBfGzewQ":
        Script27();
        break;
      case "6id5GF9ZddB":
        Script28();
        break;
      case "5od9AilarPg":
        Script29();
        break;
      case "6pUSii5Qdhh":
        Script30();
        break;
      case "5clB6QrJSM3":
        Script31();
        break;
      case "5hixxKg9N4h":
        Script32();
        break;
      case "6qHqEN2gqu3":
        Script33();
        break;
      case "5va1jSxf4C7":
        Script34();
        break;
      case "5yGfpsA5JpS":
        Script35();
        break;
      case "5eDa3szx18b":
        Script36();
        break;
  }
}

function Script1()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Singapore"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script2()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Singapore"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script3()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Taipei"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script4()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Taipei"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script5()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script6()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script7()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script8()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script9()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script10()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script11()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script12()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script13()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script14()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script15()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script16()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script17()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Africa/Johannesburg"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script18()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Africa/Johannesburg"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script19()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script20()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script21()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script22()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script23()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Canada/Mountain"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script24()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Canada/Mountain"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script25()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script26()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script27()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script28()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script29()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script30()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script31()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script32()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script33()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script34()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

function Script35()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Africa/Johannesburg"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())
let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
  days.push( moment(NYCTime).add(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("SLNYCTime",NYCTime);
player.SetVar("minute",minutes);
player.SetVar("hour",hours);
player.SetVar("MM",minutes);
player.SetVar("HH",hours);
player.SetVar("SLday0",day0);
player.SetVar("SLdd0",dd0);
player.SetVar("P1",P1);
player.SetVar("P2",P2);
player.SetVar("P3",P3);
player.SetVar("P4",P4);
player.SetVar("P5",P5);
player.SetVar("P6",P6);
player.SetVar("P7",P7);
}

function Script36()
{
  var NYCTime = new Date().toLocaleString("en-US", {timeZone: "Africa/Johannesburg"});
NYCTime = new Date(NYCTime);
var day = NYCTime.getDate();
var month = NYCTime.getMonth() + 1;
var year = NYCTime.getFullYear();
var hours = NYCTime.getHours();
if (hours<10) { 
hours = "0" + hours;
}
var minutes = NYCTime.getMinutes();
if (minutes<10) { 
minutes = "0" + minutes;
}
var day0 = NYCTime.getDay();
var dd0 = NYCTime.getDate();
if (dd0<10) { 
dd0 = "0" + dd0;

}
console.log('NYCTime: '+NYCTime.toLocaleString())

let days = [];
let daysRequired = 7

for (let i = daysRequired; i >= 1; i--) {
  days.push( moment(NYCTime).subtract(i, 'days').format('D') )
}

console.log(days)


function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P1 = days.shift();

console.log(P1)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P2 = days.shift();

console.log(P2)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P3 = days.shift();

console.log(P3)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P4 = days.shift();

console.log(P4)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P5 = days.shift();

console.log(P5)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P6 = days.shift();

console.log(P6)

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item 
  return arr.splice(0, 1); 
}


var P7 = days.shift();

console.log(P7)
var player = GetPlayer();
player.SetVar("N7",P1);
player.SetVar("N6",P2);
player.SetVar("N5",P3);
player.SetVar("N4",P4);
player.SetVar("N3",P5);
player.SetVar("N2",P6);
player.SetVar("N1",P7); 

}

