document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startBtn").addEventListener("click", setAlarm);

  document.getElementById("stopBtn").addEventListener("click", clearAlarm);
});

function setAlarm() {
  chrome.alarms.create("PomodoroTaskAlarm", {
    delayInMinutes: 1,
    periodInMinutes: 1,
  });
}

function clearAlarm() {
  console.log("clearing");

  chrome.alarms.clear("PomodoroTaskAlarm", () => {
    console.log("cleared");
  });

  chrome.notifications.create("AlarmCleared", {
    type: "basic",
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1LorHZXyOs79cdoY2Hj5WCcUC4eCRlzQzg&usqp=CAU",
    title: "Pomodoro Alarmed Snoozed",
    message: "Come Back Soon!",
    priority: 1,
  });
}
