chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "PomodoroTaskAlarm") {
    chrome.notifications.create("PomodoroTaskAlarm", {
      type: "basic",
      iconUrl: "./assets/done.png",
      title: "Take a break",
      message: "25mins are up. Rest for 5 mins",
      priority: 1,
    });
  }
});
