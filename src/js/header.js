// функція зміни стану активності посилання

document.addEventListener('DOMContentLoaded', function () {
  const home = document.querySelector('.header-menu-home');
  const shoppingList = document.querySelector('.header-menu-shopping');
  function applyBackground() {
    const currentPath = window.location.pathname;
    home.classList.toggle(
      'btn-active',
      currentPath === '/index.html' || currentPath === '/'
    );
    shoppingList.classList.toggle(
      'btn-active',
      currentPath.includes('card.html')
    );
  }
  applyBackground();
  home.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './index.html';
  });
  shoppingList.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './card.html';
  });
});

const themeSwitch = document.querySelector('.theme-switch-input');
const body = document.querySelector('body');

// Функція для зміни теми та збереження її в локальному сховищі
function toggleTheme() {
  if (themeSwitch.checked === false) {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
}

// Перевірка, яка тема встановлена за замовчуванням
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeSwitch.checked = true;
  toggleTheme();
} else {
  themeSwitch.checked = false;
}

themeSwitch.addEventListener('change', toggleTheme);

// відкриття та закриття мобільного меню

const menuOpenButton = document.querySelector('.menu-open-btn');
const menuCloseButton = document.querySelector('.menu-close-btn');
const mobMenu = document.querySelector('.mob-menu');

// Відкриття меню при кліку на кнопку відкриття
menuOpenButton.addEventListener('click', () => {
  // document.body.style.overflow = 'hidden';
  document.body.classList.add('overflow-hidden');
  mobMenu.classList.add('is-open');

  menuOpenButton.classList.remove('is-open');
  menuOpenButton.classList.add('hidden');
  menuCloseButton.classList.remove('hidden');
});

// Закриття меню при кліку на кнопку закриття
menuCloseButton.addEventListener('click', () => {
  // document.body.style.overflow = 'auto';
  document.body.classList.remove('overflow-hidden');
  mobMenu.classList.remove('is-open');
  menuOpenButton.classList.remove('hidden');
  menuCloseButton.classList.add('hidden');
});

//функція яка робить активним посилання в мобільному меню

// document.addEventListener('DOMContentLoaded', function () {

//   const home = document.querySelector('.mob-menu-home');
//   const shoppingList = document.querySelector('.mob-menu-calor');
//   const mobBasketIcon = document.querySelector('.mob-basket-icon')
//   function applyBackground() {
//     const currentPath = window.location.pathname;
//     home.classList.toggle('btn-active-home', currentPath === '/index.html' || currentPath === '/');
//     shoppingList.classList.toggle('btn-active-shopping', currentPath.includes('card.html'));
//     mobBasketIcon.classList.toggle('mob-basket-isactive', currentPath.includes('card.html'));
//   }
//   applyBackground();
//   home.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './index.html';
//   });
//   shoppingList.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './card.html';
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const home = document.querySelector('.header-menu-home');
//   const shoppingList = document.querySelector('.header-menu-shopping');
//   function applyBackground() {
//     const currentPath = window.location.pathname;
//     home.classList.toggle('btn-active', currentPath === '/index.html' || currentPath === '/');
//     shoppingList.classList.toggle('btn-active', currentPath.includes('card.html'));
//   }
//   applyBackground();
//   home.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './index.html';
//   });
//   shoppingList.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './card.html';
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const mobeHomeMenu = document.querySelector('.mob-menu-home');
  const mobShoppingList = document.querySelector('.mob-menu-calor');
  const headerHomeMenu = document.querySelector('.header-menu-home');
  const headerShoppingList = document.querySelector('.header-menu-shopping');
  const basketIcon = document.querySelector('.basket-icon');
  const mobBasketIcon = document.querySelector('.mob-basket-icon');

  const currentLinkShoppingList =
    window.location.pathname.includes('/card.html');

  const linkMob = document.querySelector('.mob-list > li:last-child > a');
  const linkHeader = document.querySelector('.header-menu > li:last-child > a');

  let mobLinkHref = linkMob.getAttribute('href').includes('/card.html');
  let headerLinkHref = linkHeader.getAttribute('href').includes('/card.html');

  if (
    mobLinkHref === currentLinkShoppingList ||
    headerLinkHref === currentLinkShoppingList
  ) {
    mobShoppingList.classList.add('open-list');
    headerShoppingList.classList.add('open-list');
    basketIcon.classList.add('basket-icon-catch');
    mobBasketIcon.classList.add('mob-basket-isactive');
  } else {
    mobeHomeMenu.classList.add('open-home');

    headerHomeMenu.classList.add('open-home');
  }
});

//comented


// document.addEventListener('DOMContentLoaded', function() {
//   const home = document.querySelector('.mob-menu-home');
//   const shoppingList = document.querySelector('.mob-menu-calor');
//   const mobBasketIcon = document.querySelector('.mob-basket-icon');
//   function applyBackground() {
//     const currentPath = window.location.pathname;
//     home.classList.toggle('btn-active-home', currentPath === '/index.html' || currentPath === '/');
//     shoppingList.classList.toggle('btn-active-shopping', currentPath.includes('card.html'));
//     mobBasketIcon.classList.toggle('mob-basket-isactive', currentPath.includes('card.html'));
//   }
//   applyBackground();
//   home.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './index.html';
//   });
//   shoppingList.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './card.html';
//   });

// comented

// document.addEventListener('DOMContentLoaded', function() {
//   const home = document.querySelector('.header-menu-home');
//   const shoppingList = document.querySelector('.header-menu-shopping');
//   const headerIcon = document.querySelector('.basket-icon')
//   function applyBackground() {
//     const currentPath = window.location.pathname;
//     home.classList.toggle('btn-active', currentPath.includes('index.html'));
//     shoppingList.classList.toggle('btn-active', currentPath.includes('card.html'));
//     headerIcon.classList.toggle('basket-icon-catch', currentPath.includes('card.html'));

//   }
//   applyBackground();
//   home.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './index.html';
//   });
//   shoppingList.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = './card.html';
//   });
// });
