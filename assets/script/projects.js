"use strict";

console.log('Hello World...');


const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');

const sidebar = document.querySelector('#sidebar');


menuBtn.addEventListener('click',()=>{
    sidebar.toggleAttribute('data-sidebar-active');
});
closeBtn.addEventListener('click',()=>{
    sidebar.toggleAttribute('data-sidebar-active');
});

