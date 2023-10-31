function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    datetimeElement.innerHTML = `Date: ${formattedDate}<br>Time: ${formattedTime}`;
}


setInterval(updateDateTime, 1000);


updateDateTime();