/*Redeveloped
Lab: Software Engineering
Exp:Identifying the Requirements from Problem Statements
File Name: main.js
Author: Prakriti Dhang */

function reset1(){

    document.getElementById("exer11").reset();
    document.getElementById("exer12").reset();
    document.getElementById("exer13").reset();
    document.getElementById("exer21").reset();
    document.getElementById("exer31").reset();
    document.getElementById("optiona1").style.background="";
    document.getElementById("optionb1").style.background="";
    document.getElementById("optionc1").style.background="";
    document.getElementById("optiond1").style.background="";
    document.getElementById("optiona21").style.background="";
    document.getElementById("optionb21").style.background="";
    document.getElementById("optionc21").style.background="";
    document.getElementById("optiona31").style.background="";
    document.getElementById("optionb31").style.background="";
    document.getElementById("optionc31").style.background="";
    document.getElementById("optiond31").style.background="";
    document.getElementById("optiona12").style.background="";
    document.getElementById("optionb12").style.background="";
    document.getElementById("optionc12").style.background="";
    document.getElementById("optiond12").style.background="";
   document.getElementById("optione12").style.background="";
   document.getElementById("optionf12").style.background="";
   document.getElementById("optiong12").style.background="";
   document.getElementById("optionh12").style.background="";
   document.getElementById("optioni12").style.background="";
   document.getElementById("optionj12").style.background="";
   document.getElementById("optionk12").style.background="";
   document.getElementById("optionl12").style.background="";

   document.getElementById("optiona13").style.background="";
   document.getElementById("optionb13").style.background="";
   document.getElementById("optionc13").style.background="";
   document.getElementById("optiond13").style.background="";
   document.getElementById("optione13").style.background="";
   document.getElementById("optionf13").style.background="";
   document.getElementById("optiong13").style.background="";
   document.getElementById("optionh13").style.background="";
   document.getElementById("ex3").load();
}


function subex()
    {
    var x = document.getElementById("selectex");
    if(x.options[x.selectedIndex].value==1){
        document.getElementById("exercise").style.display="block";
        document.getElementById("lo1").style.display="block";
        document.getElementById("lo2").style.display="none";
        document.getElementById("lo3").style.display="none";
        document.getElementById("lim2").style.display="none";
        document.getElementById("ex1").style.display="block";
        document.getElementById("ex2").style.display="none";
        document.getElementById("ex3").style.display="none";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result").innerHTML="";
       

    }
    if(x.options[x.selectedIndex].value==2){
        document.getElementById("exercise").style.display="block";
        document.getElementById("lo2").style.display="block";
        document.getElementById("lim2").style.display="block";
        document.getElementById("lo1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="block";
        document.getElementById("ex3").style.display="none";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result").innerHTML="";
       

    }
    if(x.options[x.selectedIndex].value==3){
        document.getElementById("exercise").style.display="block";
        document.getElementById("lo3").style.display="block";
        document.getElementById("lo1").style.display="none";
        document.getElementById("lo2").style.display="none";
        document.getElementById("lim2").style.display="none";
        document.getElementById("ex3").style.display="block";
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="none";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result").innerHTML="";
       
       

    }
    if(x.options[x.selectedIndex].value==0){
        document.getElementById("exercise").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="none";
        document.getElementById("ex3").style.display="none";
        document.getElementById("dispres").style.display="none";
        

    }
    
    }

function sub1(){
    
        if (document.getElementById('opt12').checked){
            document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
            document.getElementById("optionb1").style.background="#C7FF77";
        }
        if(document.getElementById('opt22').checked){
            document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
            document.getElementById("optionb21").style.background="#C7FF77";
        }
      if (document.getElementById('opt32').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
            document.getElementById("optionb31").style.background="#C7FF77";
      }
      if (document.getElementById('opt33').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
            document.getElementById("optionc31").style.background="#C7FF77";
      }
       if((document.getElementById('opt34').checked) ) {
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optiond31").style.background="#C7FF77";
        } 
        if((document.getElementById('opt11').checked)){
            document.getElementById("optiona1").style.background="#FFBD99";
            document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
        }
        if((document.getElementById('opt13').checked)){
            document.getElementById("optionc1").style.background="#FFBD99";
            document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
        }
        if((document.getElementById('opt14').checked)){
            document.getElementById("optiond1").style.background="#FFBD99";
            document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
        }

         if((document.getElementById('opt21').checked)){
            document.getElementById("optiona21").style.background="#FFBD99";
            document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
        }
         if((document.getElementById('opt23').checked)){
            document.getElementById("optionc21").style.background="#FFBD99";
            document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
        }
         if((document.getElementById('opt31').checked)){
            document.getElementById("optiona31").style.background="#FFBD99";
            document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
        }
        

      else if((document.getElementById('opt12').checked) && (document.getElementById('opt22').checked)&& (document.getElementById('opt32').checked)&&(document.getElementById('opt33').checked)&& (document.getElementById('opt34').checked))
        {
            showresult();
        }
        else if(((document.getElementById('opt12').checked) && (document.getElementById('opt22').checked)&& (document.getElementById('opt32').checked)&&(document.getElementById('opt33').checked)&& (document.getElementById('opt34').checked))|| (document.getElementById('opt31').checked) || (document.getElementById('opt23').checked) || (document.getElementById('opt21').checked)|| (document.getElementById('opt14').checked) || (document.getElementById('opt13').checked)|| (document.getElementById('opt11').checked))
        {
            alert("One or more correct option(s) has(have) not been selected.");
        }
        else {
            alert("One or more correct option(s) has(have) not been selected.");
        }
    }   


    function chnga1(){
        if((document.getElementById('opt11').checked == false) ){
            document.getElementById("optiona1").style.background="#FFFFFF";
            document.getElementById("show_result").innerHTML="";
        }
    }


    function chngc1(){
        if((document.getElementById('opt13').checked == false) ){
            document.getElementById("optionc1").style.background="#FFFFFF";
            document.getElementById("show_result").innerHTML="";
        }
    }

    function chngd1(){
        if((document.getElementById('opt14').checked == false) ){
            document.getElementById("optiond1").style.background="#FFFFFF";
            document.getElementById("show_result").innerHTML="";
        }
    }

    function chnga21(){
        if((document.getElementById('opt21').checked == false) ){
            document.getElementById("optiona21").style.background="#FFFFFF";
            document.getElementById("show_result").innerHTML="";
        }
    }

    function chngc21(){
        if((document.getElementById('opt23').checked == false) ){
            document.getElementById("optionc21").style.background="#FFFFFF";
            document.getElementById("show_result").innerHTML="";
        }
    }


    function chnga31(){
    if((document.getElementById('opt31').checked == false) ){
        document.getElementById("optiona31").style.background="#FFFFFF";
        document.getElementById("show_result").innerHTML="";
    }
}


function sub2(){
    if(document.getElementById('opt21a').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optiona12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21b').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionb12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21c').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionc12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21d').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optiond12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21f').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionf12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21g').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optiong12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21h').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionh12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21j').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionj12").style.background="#C7FF77";
    }
    if(document.getElementById('opt21k').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionk12").style.background="#C7FF77";
    }

    if(document.getElementById('opt21e').checked){
        document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect ";
        document.getElementById("optione12").style.background="#FFBD99";
    }
    if(document.getElementById('opt21i').checked){
        document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect ";
        document.getElementById("optioni12").style.background="#FFBD99";
    }
    if(document.getElementById('opt21l').checked){
        document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect ";
        document.getElementById("optionl12").style.background="#FFBD99";
    }


    else if((document.getElementById('opt21a').checked) && (document.getElementById('opt21b').checked)&& (document.getElementById('opt21c').checked)&&(document.getElementById('opt21d').checked)&& (document.getElementById('opt21f').checked)&& (document.getElementById('opt21g').checked)&& (document.getElementById('opt21h').checked)&& (document.getElementById('opt21j').checked)&& (document.getElementById('opt21k').checked))
        {
            showresult();
            
        }
        else {
            alert("One or more correct option(s) has(have) not been selected.");
        }
}


function chnge12(){
    if(document.getElementById('opt21e').checked==false){
        document.getElementById("show_result").innerHTML="";
        document.getElementById("optione12").style.background="#FFFFFF";
    }
}

function chngi12(){
    if(document.getElementById('opt21i').checked==false){
        document.getElementById("show_result").innerHTML="";
        document.getElementById("optioni12").style.background="#FFFFFF";
    }
}

function chngl12(){
    if(document.getElementById('opt21l').checked==false){
        document.getElementById("show_result").innerHTML="";
        document.getElementById("optionl12").style.background="#FFFFFF";
    }
}


function sub3(){

    if (document.getElementById('opt31b').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionb13").style.background="#C7FF77";
    }
    if(document.getElementById('opt31d').checked){
        document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optiond13").style.background="#C7FF77";
    }
  if (document.getElementById('opt31f').checked){
    document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optionf13").style.background="#C7FF77";
  }
  if (document.getElementById('opt31g').checked){
    document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
        document.getElementById("optiong13").style.background="#C7FF77";
  }
   if((document.getElementById('opt31h').checked) ) {
    document.getElementById("show_result").innerHTML="Correct. One or more correct option(s) has(have) not been selected. ";
    document.getElementById("optionh13").style.background="#C7FF77";
    } 

    if((document.getElementById('opt31a').checked)){
        document.getElementById("optiona13").style.background="#FFBD99";
        document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
    }
     if((document.getElementById('opt31c').checked)){
        document.getElementById("optionc13").style.background="#FFBD99";
        document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
    }
     if((document.getElementById('opt31e').checked)){
        document.getElementById("optione13").style.background="#FFBD99";
        document.getElementById("show_result").innerHTML="One or more correct option(s) is(are) incorrect";
    }

    
   else if((document.getElementById('opt31b').checked) && (document.getElementById('opt31d').checked)&& (document.getElementById('opt31f').checked)&&(document.getElementById('opt31g').checked)&& (document.getElementById('opt31h').checked))
        {
            document.getElementById("show_result").innerHTML="All are correct";
        }
 else {
            alert("One or more correct option(s) has(have) not been selected.");
        }
}

function chnga13(){
    if(document.getElementById('opt31a').checked==false){
        document.getElementById("show_result").innerHTML="";
        document.getElementById("optiona13").style.background="#FFFFFF";
    }
}

function chngc13(){
    if(document.getElementById('opt31c').checked==false){
        document.getElementById("show_result").innerHTML="";
        document.getElementById("optionc13").style.background="#FFFFFF";
    }
}

function chnge13(){
    if(document.getElementById('opt31e').checked==false){
        document.getElementById("show_result").innerHTML="";
        document.getElementById("optione13").style.background="#FFFFFF";
    }
}


function showresult(){
    document.getElementById("show_result").innerHTML="All are correct";
    
}

