'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const hero = document.querySelector('.hero');
  const close = document.getElementById('close');
  const about = document.querySelector('.overlay .about');
  const service = document.querySelector('.overlay .service');
  const news = document.querySelector('.overlay .news');
  const contact = document.querySelector('.overlay .contact');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    hero.classList.add('hide');
  });
  
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    hero.classList.remove('hide');

  });

  about.addEventListener('click', () => {
    overlay.classList.remove('show');
    hero.classList.remove('hide');
  });
  service.addEventListener('click', () => {
    overlay.classList.remove('show');
    hero.classList.remove('hide');
  });
  news.addEventListener('click', () => {
    overlay.classList.remove('show');
    hero.classList.remove('hide');
  });
  contact.addEventListener('click', () => {
    overlay.classList.remove('show');
    hero.classList.remove('hide');
  });
}