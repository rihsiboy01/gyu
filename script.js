function startTimer() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
  
    function updateTimer() {
      
      const now = new Date();
  
      
      const hours = 23 - now.getHours(); 
      const minutes = 59 - now.getMinutes(); 
      const seconds = 59 - now.getSeconds(); 
  
      
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  
    
    setInterval(updateTimer, 1000);
  }
  
  startTimer();
  