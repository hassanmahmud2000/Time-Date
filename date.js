document.getElementById('now-time').addEventListener('click',function(){
    const currentDate = new Date();
    const timeDate = document.getElementById('day');
    timeDate.innerText = currentDate;
})