function fun()
{
    var inp=parseFloat(document.getElementById("temp").value);
    cel1=document.getElementsByTagName("option").value;
    cel1=document.getElementsByTagName("option").value;
    d=document.getElementsByClassName("d")
    if(cel1=="Degree Celcius" && cel2=="Farhaneit")
    {
    var far=inp*(9/5) +32;
    d.innerHTML=far;
    }
    
    else if(cel1=="Farhaneit" && cel2=="Degree Celcius")
    {
    var cal=(inp -32)*(5/9)
    d.innerHTML=cal;
    }
}











