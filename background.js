chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("newww");
  if (alarm.name === "PomodoroTaskAlarm") {
    chrome.notifications.create("PomodoroTaskAlarm", {
      type: "basic",
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1LorHZXyOs79cdoY2Hj5WCcUC4eCRlzQzg&usqp=CAU",
      title: "notification title",
      message: "notification message",
      priority: 1,
    });
  }
});
