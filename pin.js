
function main()
{
    var h1 = document.querySelector("h1");
    var isRed = false;
    setInterval(function(){
        if(isRed)
        {
            h1.style.color = "white";
        }
        else
        {
            h1.style.color = "red";
        }
        isRed = !isRed;
    }, 750);
}
main();