// this function used to creat th countUp  animation for business websites
// use the three parameters to customize it 
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it 
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Shipments",436,10);
numCounter("Clients",32,100);
numCounter("Partners",12,100);