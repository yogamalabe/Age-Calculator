var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");


var button=document.createElement("button");
button.innerHTML="Display data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);

document.body.append(input,button);


function displaydata(){
var inputs=document.getElementById("dob").value;
console.log(typeof(inputs));
if(Date.parse(inputs)){
var inputdate=new Date(inputs);
var currentdate=new Date();

//Milliseconds diff
var millisecdiff=currentdate.getTime()-inputdate.getTime();
var millisecvalue=setvalues("div","id","millisec",millisecdiff);


//Seconds Diff
var secondsdiff=mathfloor(millisecdiff,1000);
var secvalue=setvalues("div","id","sec",secondsdiff);


//Minutes diff
var minutesdiff=mathfloor(secondsdiff,60);
var minutevalue=setvalues("div","id","min",minutesdiff);

//Hours diff
var hoursdiff=mathfloor(minutesdiff,60);
var hourvalue=setvalues("div","id","hr",hoursdiff);

//day diff
var daydiff=mathfloor(hoursdiff,24);
var dayvalue=setvalues("div","id","day",daydiff);

//year diff
var yeardiff=getyears(inputdate,currentdate);
var yearvalue=setvalues("div","id","yr",yeardiff);

//months diff
var monthdiff=getmonths(inputdate,currentdate);
var monthvalue=setvalues("div","id","month",monthdiff);

document.body.append(yearvalue,monthvalue,dayvalue,hourvalue,minutevalue,secvalue,millisecvalue);

}
else{
    console.log("invalid input entered");
}
}


function mathfloor(value1,value2){
return Math.floor(value1/value2);
}

function getyears(value1,value2){
var d1=new Date(value1);
var d2=new Date(value2);
return d2.getFullYear()-d1.getFullYear();
}


function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}

function setvalues(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    if(attrvalue=="millisec"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Milliseconds"+ " " + content;
    }
    else if(attrvalue=="sec"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Seconds"+ " " + content;
    }
    else if(attrvalue=="min"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Minutes"+ " " + content;
    }
    else if(attrvalue=="hr"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Hours"+ " " + content;
    }
    else if(attrvalue=="day"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Days"+ " " + content;
    }
    else if(attrvalue=="yr"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Years"+ " " + content;
    }
    else if(attrvalue=="month"){
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML="Months"+ " " + content;
    }
    return ele;
}
