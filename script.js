var mi=0;
var se=0
var sm=0
var count=0

var mistring,sestring,smstring
var timer=false

function start()
{
    timer=true
    update()
}
function stop()
{
    timer=false
}
function reset()
{
    timer=false
    mi=00
    se=00
    count=00
    document.getElementById("milli").innerHTML=count
    document.getElementById("sec").innerHTML=se
    document.getElementById("min").innerHTML=mi
}
function update()
{
    if(timer==true){
        count=count+1
        if(count==100)
        {
            se=se+1;
            count=0
        }
        if(se==60)
        {
            mi=mi+1;
            se=0
            count=0
        }
        var mistring=mi
        var sestring=se
        var countstring=count
        if(mi<10)
        {
          mistring="0"+mistring
        }
        if(se<10)
        {
          sestring="0"+sestring
        }
        if(count<10)
        {
          countstring="0"+countstring
        }
        document.getElementById("milli").innerHTML=countstring
        document.getElementById("sec").innerHTML=sestring
        document.getElementById("min").innerHTML=mistring
        setTimeout("update()",10)
    }
}