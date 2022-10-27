<button onclick ="buttonHandler()">«ввод информации о книге»</button> 
function buttonHandler() {
    const dateElement = document.getElementById("date");
    dateElement.textContent = new Date();   
}