# Projects related to DOM


# Solution code
Project - 01 | JavaScript Background Color Switcher

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (eventListner) {
    switch (eventListner.target.id) {
      case 'grey':
        body.style.backgroundColor = eventListner.target.id;
        break;

      case 'orange':
        body.style.backgroundColor = eventListner.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = eventListner.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = eventListner.target.id;
        break;
    }
  });
});





```