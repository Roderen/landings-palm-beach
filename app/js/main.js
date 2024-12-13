// Ajax
// Consult form ==============================================================
$(function () {
  $('.popup-consult form').on('submit', function (e) {
    e.preventDefault();
    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

// Brochure form popup
$(function () {
  $('.popup-brochure form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

// Brochure form section
$(function () {
  $('.brochure__form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

// Footer form ======================================================================
$(function () {
  $('.footer__form').on('submit', function (e) {
    e.preventDefault();
    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});










// Google map (ADD THE TOKEN!!!!!!)
document.addEventListener('DOMContentLoaded', () => {
  function initMap() {
    new google.maps.InfoWindow({ content: "", disableAutoPan: !0 });
    let a = { lat: 25.099679, lng: 55.156004, };
    myIcon = '/images/map-marker.svg';
    let b = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: a,
      styles: [{ "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "hue": "#2c2e33" }, { "saturation": 7 }, { "lightness": 19 }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "hue": "#ffffff" }, { "saturation": -100 }, { "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "hue": "#ffffff" }, { "saturation": -100 }, { "lightness": 100 }, { "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "hue": "#bbc0c4" }, { "saturation": -93 }, { "lightness": 31 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "hue": "#bbc0c4" }, { "saturation": -93 }, { "lightness": 31 }, { "visibility": "on" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "hue": "#bbc0c4" }, { "saturation": -93 }, { "lightness": -2 }, { "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "hue": "#e9ebed" }, { "saturation": -90 }, { "lightness": -8 }, { "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "hue": "#e9ebed" }, { "saturation": 10 }, { "lightness": 69 }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "hue": "#e9ebed" }, { "saturation": -78 }, { "lightness": 67 }, { "visibility": "simplified" }] }],
    });

    new google.maps.Marker({ position: a, map: b, icon: myIcon });
  }
  window.initMap = initMap;
  let googleMapLoaded = !1;
  jQuery(window).on("scroll", function () {
    if (!1 === googleMapLoaded && jQuery(window).scrollTop() > jQuery("#map").offset().top - jQuery(window).height()) {
      googleMapLoaded = !0;
      let a = document.createElement("script");
      (a.type = "text/javascript"), (a.src = "https://maps.googleapis.com/maps/api/js?key=ssssss&callback=initMap"), document.body.appendChild(a);
    }
  });

})








// Open/Close popup
function openPopups() {
  const body = document.body;
  const html = document.querySelector('html');
  const popup = document.querySelectorAll('.popup');
  const buttonConsult = document.querySelectorAll('.button-consult');
  const buttonBrochure = document.querySelectorAll('.button-brochure');
  const popupConsult = document.querySelector('.popup-consult');
  const popupBrochure = document.querySelector('.popup-brochure');

  popup.forEach(popup => {
    const popupInner = popup.querySelector('.popup__inner');

    popup.addEventListener('click', (e) => {
      const popupClose = popup.querySelector('.popup-close');
      if (e.target == popup || e.target == popupClose) {
        popup.classList.remove('active');
        popupInner.classList.remove('active');
        body.classList.remove('active');
        html.classList.remove('active');
      }
    })
  })

  buttonConsult.forEach(consult => {
    consult.addEventListener('click', (e) => {
      e.preventDefault();
      popupConsult.classList.add('active');
      popup.forEach(thisPopup => {
        const popupInner = thisPopup.querySelector('.popup__inner');
        popupInner.classList.add('active');
      })
      body.classList.add('active');
      html.classList.add('active');
    })
  });

  buttonBrochure.forEach(brochure => {
    brochure.addEventListener('click', (e) => {
      e.preventDefault();
      popupBrochure.classList.add('active');
      popup.forEach(thisPopup => {
        const popupInner = thisPopup.querySelector('.popup__inner');
        popupInner.classList.add('active');
      })
      body.classList.add('active');
      html.classList.add('active');
    })
  });
}
openPopups();


function formValidInput() {
  const form = document.querySelectorAll('form');

  form.forEach(form => {
    const formInput = form.querySelectorAll('input');

    formInput.forEach(input => {
      input.addEventListener('change', (e) => {
        if (!input.value) {
          input.nextElementSibling.classList.remove('form-label-valid');
        } else {
          input.nextElementSibling.classList.add('form-label-valid');
        }
      })
    })
  })
};
formValidInput();


// Form invalid input
function formInvalidInput() {
  const allForms = document.querySelectorAll('form');

  allForms.forEach(form => {
    const formInputs = form.querySelectorAll('.form-input');
    const formButton = form.querySelectorAll('.form-button');

    formButton.forEach(button => {
      button.addEventListener('click', () => {
        formInputs.forEach(input => {
          if (!input.value) {
            input.classList.add('invalid-input');
          } else {
            input.classList.remove('invalid-input');
          }
        })
      })
    })
  })
};
formInvalidInput();



// Limit number and email
const limitNumber = e => {
  const value = e.value;
  e.value = value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
}

const limitEmail = e => {
  const value = e.value;
  e.value = value.replace(/[А-Яа-яЁё]/g, '');
}



const formSuccsess = document.querySelector('.form__succsess');
document.querySelector('.form__succsess-close').addEventListener('click', () => {
  formSuccsess.style.display = 'none';
})



/* For All Sites */
$(document).ready(function () {
  let userPower = {};
  $(document).on('input', 'input', function () {
    let name = $(this).attr('name');
    if (typeof userPower[name] !== "undefined") {
      userPower[name] = userPower[name] + 1;
    } else {
      userPower[name] = 1;
    }
  }).on('focus', 'input', function () {
    if (typeof userPower['focus'] !== "undefined") {
      userPower['focus'] = userPower['focus'] + 1;
    } else {
      userPower['focus'] = 1;
    }
  }).on('click', 'button, a', function () {
    if (typeof userPower['click'] !== "undefined") {
      userPower['click'] = userPower['click'] + 1;
    } else {
      userPower['click'] = 1;
    }
  });
  $('form').submit(function () {
    userPoints(userPower);
  });
});
function userPoints(userPower) {
  let user_ses = 0,
    input_score = 0;
  user_ses = user_ses + (Object.keys(userPower).length / 10);

  if (typeof userPower['focus'] !== "undefined" && userPower['focus'] >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  if (typeof userPower['click'] !== "undefined") {
    user_ses = user_ses + 0.1;
  }
  for (const [key, value] of Object.entries(userPower)) {
    if (key != 'focus' && key != 'click') {
      input_score = input_score + value;
    }
  }
  if (typeof userPower['focus'] !== "undefined" && input_score >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  saveCookie('user_score', user_ses);

  return user_ses;
}
function saveCookie(n, v, t = 30) {
  let saveDate = new Date(Date.now() + (60 * 60 * 24 * t * 1000));
  document.cookie = n + "=" + v + "; path=/; expires=" + saveDate.toGMTString();
}
function readCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}