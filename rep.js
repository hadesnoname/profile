function loadIonicons() {
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
  document.head.appendChild(script);
}

// Проверка поддержки модулей ES6
if (!('noModule' in HTMLScriptElement.prototype)) {
  loadIonicons();
}

document.addEventListener("DOMContentLoaded", function() {
  const menutoggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menutoggle.onclick = function () {
      menutoggle.classList.toggle("active");
      navigation.classList.toggle("active");
      document.querySelector('main').classList.toggle('hidden');
      document.querySelector('section').classList.toggle('hidden');
  };
});
