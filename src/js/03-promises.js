import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstDelay = parseInt(event.target.elements.delay.value);
  const stepDelay = parseInt(event.target.elements.step.value);
  const amount = parseInt(event.target.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const currentDelay = firstDelay + i * stepDelay;
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
  }
});







