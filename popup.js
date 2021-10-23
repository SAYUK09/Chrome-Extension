document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startBtn").addEventListener("click", setAlarm);

  document.getElementById("stopBtn").addEventListener("click", clearAlarm);
});

function setAlarm() {
  console.log("setting");
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
}
