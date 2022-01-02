//set countdown date

let countDownDate = new Date(`December 31, 2021 23:59:59`).getTime();

let countDownTimer = setInterval(() => {
  //set present date
  let presentDate = new Date().getTime();

  //difference in the dates
  let difference = countDownDate - presentDate;

  let days = Math.floor(difference / (60 * 60 * 24 * 1000));
  let hours = Math.floor(
    (difference % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000)
  );
  let minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((difference % (60 * 1000)) / 1000);

  document.getElementById("time").innerHTML =
    days +
    "days " +
    hours +
    "hours " +
    minutes +
    "minutes " +
    seconds +
    "seconds ";

  if (difference < 0) {
    clearInterval(countDownTimer);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);
