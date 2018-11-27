var katzDeliLine = [];
function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesAndNumbers = [];
  for(var i=0; i<line.length; i++){
    lineNamesAndNumbers.push(i+ 1 + ". "+ line[i]);
  }
  return ("The line is currently: " +lineNamesAndNumbers.join(', '));
}

var counter = 1 
function takeANumber(line, name){
  line.push(name);
  return ("Welcome, " + name + ". You are number " + line.length + " in line.");
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine>[]){
  var myString=  `Currently serving ${katzDeliLine.shift()}.`;
  console.log(katzDeliLine);
}
else{
  return "There is nobody waiting to be served!";
 }
}


