/** Add any JavaScript you need to this file. */
window.onload = function() {
  index_logo();
  lower_nav();
  default_display();
  click_routing();
};

function populate_columns(sorted) {
  sorted.forEach(element => {
    // print or recording?
    if (element.type === 'Print') {
      var div = document.querySelector('#print_list'); // vars are global scope
    } else {
      div = document.querySelector('#recording_list');
    }
    // create a container
    let container = document.createElement('div');
    container.setAttribute('class', 'item_frame');

    // add the image
    let img = document.createElement('img');
    img.setAttribute('src', element.img);
    img.setAttribute('alt', element.alt);
    container.appendChild(img);

    // add title
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode(element.title);
    h2.appendChild(h2_text);
    container.appendChild(h2);

    // add description
    let p = document.createElement('p');
    let p_text = document.createTextNode(element.description);
    p.appendChild(p_text);
    container.appendChild(p);

    let h4 = document.createElement('h4');
    let h4_text = document.createTextNode('Style: ' + element.style);
    h4.appendChild(h4_text);
    container.appendChild(h4);

    // add price
    let desc = document.createElement('p');
    let desc_text = document.createTextNode('Price: ' + element.price);
    desc.appendChild(desc_text);
    container.appendChild(desc);
    div.appendChild(container);
  });
}

function get_jazz() {
  var sorted = window.item_data.filter(item => {
    return item.style === 'Jazz';
  });
  return sorted;
}

function get_classical() {
  var sorted = window.item_data.filter(item => {
    return item.style === 'Classical';
  });
  return sorted;
}

function get_educational() {
  var sorted = window.item_data.filter(item => {
    return item.style === 'Educational';
  });
  return sorted;
}

// useless function to maintain consistency in syntax
function get_all() {
  return window.item_data;
}

function jazz_click() {
  // clean up columns
  clear_column('#recording_list');
  clear_column('#print_list');
  populate_columns(get_jazz());
}

function classical_click() {
  // clean up columns
  clear_column('#recording_list');
  clear_column('#print_list');
  populate_columns(get_classical());
}

function educational_click() {
  // clean up columns
  clear_column('#recording_list');
  clear_column('#print_list');
  populate_columns(get_educational());
}

function all_click() {
  clear_column('#recording_list');
  clear_column('#print_list');
  populate_columns(get_all());
}

function default_display() {
  all_click();
}

function click_routing() {
  // all
  var all = document.querySelector('#all');
  all.addEventListener('click', all_click);
  // jazz
  var jazz = document.querySelector('#jazz');
  jazz.addEventListener('click', jazz_click);
  // classical
  var classical = document.querySelector('#classical');
  classical.addEventListener('click', classical_click);
  // for the kids
  var educational = document.querySelector('#educational');
  educational.addEventListener('click', educational_click);
  // // debug
  // var clear = document.querySelector('#clear');
  // clear.addEventListener('click', clear_click);
}

function clear_column(id) {
  var column = document.querySelector(id);
  while (column.firstChild) {
    column.removeChild(column.firstChild);
  }
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

function index_logo() {
  let div = document.querySelector('#logo');
  let img = document.createElement('img');
  img.setAttribute('src', 'img/lgm_logo_trans.png');
  div.appendChild(img);
}

window.item_data = [
  {
    title: 'The Ink: Recorded Versions',
    img: 'img/Octorock180.png',
    alt: 'album cover',
    type: 'Print',
    style: 'Jazz',
    description:
      'Jazz Octet ~ 12 Selections of video game classics. Music from your favourite video games as recorded on The Ink. Includes music from Mario, Kirby, Zelda and Sonic, by arrangers Liam Gallagher, Thomas Houlden, and John Nicholson.',
    price: '$100'
  },
  {
    title: 'Orange Becoming Yellow',
    img: 'img/orange_becoming_yellow.png',
    alt: 'album cover',
    type: 'Print',
    style: 'Educational',
    description:
      'Woodwind Quintet ~ 𝅘𝅥 = 160 D Major ~ Suitable for professional ensembles or level 5 educational groups. Includes concert/transposing part scores, and backing tracks for rehearsal. Backing tracks are provided at a range of rehearsal and performance tempos.',
    price: '$30'
  },
  {
    title: 'Junk',
    img: 'img/hill_house_180.png',
    alt: 'album cover',
    type: 'Print',
    style: 'Educational',
    description:
      'Jazz Orchestra ~ 𝅘𝅥 = 140 F Major ~ A jazz chart with a touch of funky shuffle. A straight ahead blow for pro bands or suitable for honour bands.  Features the trombone section with a catchy riff as well as solos for tenor saxophone and piano.',
    price: '$45'
  },
  {
    title: 'Garden Scene: Lavender',
    img: 'img/Lavender.png',
    alt: 'album cover',
    type: 'Print',
    style: 'Classical',
    description:
      'Solo Bass Clarinet ~ 𝅘𝅥 = 160 E Major ~ Solo repitore exploring all ranges of the clarinet with lyical sections contrasted by a main theme evocative of Alberti bass. This peice is part of a series of multi-instrumental pieces.',
    price: '$8'
  },
  {
    title: 'Iwata',
    img: 'img/iwata.jpg',
    alt: 'album cover',
    type: 'Print',
    style: 'Jazz',
    description:
      'Jazz Orchestra ~ 𝅘𝅥 = 210 C Major ~ Jazz samba in memory of the Saturo Iwata. Flashy horns punctuate a breezy rrhythm section. Featuring a trumpet solo and an open solo section. This peice was written to commemorate the passing of Saturo Iwata.',
    price: '$45'
  },
  {
    title: 'Its You: A Breakup Story OST',
    img: 'img/its_you180.png',
    alt: 'album cover',
    type: 'Recording',
    style: 'Educational',
    description:
      'The offical soundtrack to the award winning game from Scenario World. When Carlee comes home late from her shift at the hospital, boyfriend Josh is impatient to speak to her on the phone. this is the music that underscores the drama of the end of their relationship.',
    price: '$10'
  },
  {
    title: 'The Ink',
    img: 'img/beware180.png',
    alt: 'album cover',
    type: 'Recording',
    style: 'Jazz',
    description:
      'The second studio album by Octorock. Recorded in 2019-2020 at Canterbury Music in Toronto, The Ink is a 12 track album filled with some of the most memorable melodies in all of games music!',
    price: '$15'
  },
  {
    title: 'The Underground',
    img: 'img/the_underground180.png',
    alt: 'album cover',
    type: 'Recording',
    style: 'Jazz',
    description:
      'The first studio album by Octorock. Recorded in 2018 at Array Space in Toronto, The Underground is Octorocks debut as a recording ensemble.',
    price: '$15'
  },
  {
    title: 'Balcony Session',
    img: 'img/balcony180.png',
    alt: 'album cover',
    type: 'Recording',
    style: 'Educational',
    description:
      '9 selections from Chrono Trigger, Memories in Green, Gato Song, Peaceful Days and more. Performances by John Nicholson on Clarinet, Flute, and Tenor Sax, and by Liam Gallagher on Electric and Upright basses.',
    price: '$10'
  },
  {
    title: 'Pretend Classical Album',
    img: 'img/Rag_Rug.jpg',
    alt: 'album cover',
    type: 'Recording',
    style: 'Classical',
    description: 'Does not actually exist. Buy it and we will make it.',
    price: '$30,000'
  }
];
