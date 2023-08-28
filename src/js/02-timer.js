import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.removeAttribute("disabled");
    }
  },
};
const datePicker = flatpickr("#datetime-picker", options);
const startButton = document.querySelector(`button[data-start]`);
startButton.disabled = true;
const dataDays = document.querySelector(`[data-days]`);
const dataHours = document.querySelector(`[data-hours]`);
const dataMinutes = document.querySelector(`[data-minutes]`);
const dataSeconds = document.querySelector(`[data-seconds]`);

//! конвертуємо у нормальне відобрження
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
//! робимо двузначне число з однозначного
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

startButton.addEventListener("click", () => {
  const selectedDate = datePicker.selectedDates[0];
  const currentTime = new Date().getTime();
  const targetTime = selectedDate.getTime();
  let timeDifference = targetTime - currentTime;
  //todo: зробимо знову кнопку неактивною до вибору нової дати
    startButton.disabled = true;

  const timerInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);

    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        // якщо ввімкнути тут, то можна буде перезапускати таймер. проте не бачу потреби
        //  startButton.disabled = true;
    }

    timeDifference -= 1000;
  }, 1000);
});
