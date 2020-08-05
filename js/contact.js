/** Add any JavaScript you need to this file. */
window.onload = function() {
  index_logo();
  lower_nav();
  click_check();
  city_list();
};

function index_logo() {
  let div = document.querySelector('#logo');
  let img = document.createElement('img');
  img.setAttribute('src', 'img/lgm_logo_trans.png');
  div.appendChild(img);
}

function lower_nav() {
  // create elements
  let div = document.querySelector('.lower_nav');
  let table = document.createElement('table');
  let p = document.createElement('p');
  let td = document.createElement('td');
  let a = document.createElement('a');
  let form = document.createElement('form');
  let input = document.createElement('input');
  let input_submit = document.createElement('input');

  // fill prompt
  let text = document.createTextNode('Interested In More?');

  // fill link
  p.appendChild(text);
  let text_link = document.createTextNode('Octorock Music Videos');
  a.appendChild(text_link);
  a.setAttribute('href', 'https://www.youtube.com/c/octorockmusic');
  td.appendChild(a);
  table.appendChild(p);
  table.appendChild(td);

  // fill newsletter
  let p_join = document.createElement('p');
  let join_text = document.createTextNode('- Join the Newsletter');
  p_join.appendChild(join_text);
  table.appendChild(p_join);

  // fill input box
  form.setAttribute('id', 'newsletter_form');
  form.setAttribute('action', 'https://formspree.io/xaypvygv');
  form.setAttribute('method', 'post');
  form.setAttribute('name', 'newsletter');
  input.setAttribute('type', 'email');
  input.setAttribute('id', 'newsletter_input');
  input.setAttribute('name', 'email_input');
  input.setAttribute('size', '25');
  input.setAttribute('maxlength', '50');
  input.setAttribute('placeholder', 'Email');
  table.appendChild(form);
  table.appendChild(input);

  // fill input button
  input_submit.setAttribute('type', 'submit');
  input_submit.setAttribute('value', 'Submit');
  input_submit.setAttribute('name', 'submit');
  table.appendChild(input_submit);

  // apply to the page
  div.appendChild(table);
}

function city_list() {
  let div = document.querySelector('#cities');
  if (div.children.length === 0) {
    // if nothing's been added to the list
    canadian_cities.forEach(element => {
      let div = document.querySelector('#cities');
      let option = document.createElement('option');
      option.value = element;
      div.appendChild(option);
    });
  }
}

function inquiry_click() {
  // does the problem field exist? if so hide
  let div = document.querySelector('#order_textbox');
  if (div.children.length === 0) {
    // the text box is not here
    // do nothing
  } else {
    // the text box is already there
    div.removeChild(div.childNodes[0]);
    div.removeChild(div.childNodes[0]);
  }
}

function problem_click() {
  // does the problem field not exist? if so reveal
  let div = document.querySelector('#order_textbox');
  if (div.children.length !== 0) {
    // the text box is already there
    // do nothing
  } else {
    {
      let label = document.createElement('label');
      let label_text = document.createTextNode('Order Number:');
      label.appendChild(label_text);
      let text_input = document.createElement('input');
      text_input.setAttribute('placeholder', 'Order Number');
      text_input.setAttribute('id', 'order_number');
      text_input.setAttribute('name', 'order_number');
      div.appendChild(label);
      div.appendChild(text_input);
    }
  }
}

function click_check() {
  let check = false;
  if (check) {
    problem_click();
    inquiry_click();
  }
}

var canadian_cities = [
  'Charlottestown',
  'Bedford',
  'Edmonton',
  'Fredricton',
  'Halifax',
  'Montréal',
  'Ottawa',
  'Québec City',
  'Regina',
  'St.John',
  'St.Johns',
  'Toronto',
  'Vancouver',
  'Winnepeg'
];
