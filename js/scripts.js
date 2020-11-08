// Veriables
var MINUTE = 60;
var VELOCITY_ON_FOOT = 3.6;
var VELOCITY_BY_BICYCLE = 20.1;
var VELOCITY_BY_CAR = 70;
var VELOCITY_BY_PLANE = 800;

// Choosing elements
var distanceForm = document.querySelector('.distance-form');
var distanceInput = distanceForm.querySelector('.distance-input');
var hourOnFoot = document.querySelector('.hours-span-on-foot');
var minuteOnFoot = document.querySelector('.minutes-span-on-foot');
var hourByBicycle = document.querySelector('.hours-span-by-bicycle');
var minuteByBicycle = document.querySelector('.minutes-span-by-bicycle');
var hourByCar = document.querySelector('.hours-span-by-car');
var minuteByCar = document.querySelector('.minutes-span-by-car');
var hourByPlane = document.querySelector('.hours-span-by-plane');
var minuteByPlane = document.querySelector('.minutes-span-by-plane');

// Reset inputs' values by equaling to zero function
var resetValue = function (hourInput, minuteInput) {
  hourInput.textContent = 0;
  minuteInput.textContent = 0;
}

// Hour minute calculator function
var calculateHourMinute = function (velocity, hourInput, minuteInput) {
  var distanceInKilometres = parseFloat(distanceInput.value.trim(), 10);

  var time = (distanceInKilometres / velocity).toFixed(2);

  var rest = Math.round((time - Math.floor(time)) * MINUTE);

  time = Math.floor(time);

  hourInput.textContent = time;
  minuteInput.textContent = rest;
}

// Who goes firstly?
distanceForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (!isNaN(distanceInput.value)) {
    if (distanceInput.value > 0) {
      calculateHourMinute(VELOCITY_ON_FOOT, hourOnFoot, minuteOnFoot);
      calculateHourMinute(VELOCITY_BY_BICYCLE, hourByBicycle, minuteByBicycle);
      calculateHourMinute(VELOCITY_BY_CAR, hourByCar, minuteByCar);
      calculateHourMinute(VELOCITY_BY_PLANE, hourByPlane, minuteByPlane);
      distanceInput.value = distanceInput.value.trim();
    }
    else {
      alert('Iltimos, noldan katta musbat son kiriting )');
      resetValue(hourOnFoot, minuteOnFoot);
      resetValue(hourByBicycle, minuteByBicycle);
      resetValue(hourByCar, minuteByCar);
      resetValue(hourByPlane, minuteByPlane);
      distanceInput.value = '';
    }
  } else {
    alert('Iltimos, masofani raqamda kiriting )');
    resetValue(hourOnFoot, minuteOnFoot);
    resetValue(hourByBicycle, minuteByBicycle);
    resetValue(hourByCar, minuteByCar);
    resetValue(hourByPlane, minuteByPlane);
    distanceInput.value = '';
  }

  distanceInput.focus();
});
