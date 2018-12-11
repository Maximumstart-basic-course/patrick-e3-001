// (1)

let k = 10;

while (k >= 0) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k--;
}

// (2)
const isAdmin = true;

isAdmin ? alert('Привет, Admin') : alert('Ты точно не Admin');

// (3)

const login = prompt('Введите логин');

if (login === 'Admin') {
  const password = prompt('Введите пароль');
  if (password === 'qwerty') {
    alert('Добро пожаловать Admin');
  } else if (password === null || password === '') {
    alert('Отказано в доступе');
  } else {
    alert('Введённый пароль неправельный');
  }
} else if (login === 'user') {
  const password = prompt('Введите пароль');
  if (password === '12345') {
    alert('Добро пожаловать User');
  } else if (password === null || password === '') {
    alert('Отказано в доступе');
  } else {
    alert('Введённый пароль неправельный');
  }
} else {
  alert('Такого логина нет в системе');
}

// 4

const age = prompt('Сколько тебе лет?');

switch (age) {
  case '12':
    console.log('Слишком мало :(');
    break;
  case '16':
    console.log('Почти достаточно :[');
    break;
  case '18':
    console.log('Вот сейчас в самый раз! :)');
    break;
  default:
    console.log('Возраст не определен %)');
}
