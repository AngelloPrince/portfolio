/*==========================SKILLS EFECT =====================*/
  /*==============INFO SKILLS DESPLEGABLE=============*/ 
/* SKILLS HTML */
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
  hideText.classList.toggle('show');
}
/* SKILLS CSS */

let hideTextcss = document.getElementById('hideText_css');
let hideCss = document.getElementById('hideCss');

hideText_css.addEventListener('click', toggleTextcss);

function toggleTextcss(){
  hideCss.classList.toggle('show');
}

/* SKILLS JS */

let hideTextJs = document.getElementById('hideText_js');
let hideJs = document.getElementById('hideJs');

hideText_js.addEventListener('click', toggleTextjs);

function toggleTextjs(){
hideJs.classList.toggle('show');
}

/* SKILLS REACT*/
let hideTextReact = document.getElementById('hideText_react');
let hideReact = document.getElementById('hideReact');

hideText_react.addEventListener('click', toggleTextreact);

function toggleTextreact(){
hideReact.classList.toggle('show');
}


/* SKILLS BOOTSTRAP*/
let hideTextBs = document.getElementById('hideText_bs');
let hideBs = document.getElementById('hideBs');

hideText_bs.addEventListener('click', toggleTextbs);

function toggleTextbs(){
hideBs.classList.toggle('show');
}


/* SKILLS Github*/
let hideTextGh = document.getElementById('hideText_gh');
let hideGh = document.getElementById('hideGh');

hideText_gh.addEventListener('click', toggleTextgh);

function toggleTextgh(){
hideGh.classList.toggle('show');
}


/* SKILLS GIT*/
let hideTextGit = document.getElementById('hideText_git');
let hideGit = document.getElementById('hideGit');

hideText_git.addEventListener('click', toggleTextgit);

function toggleTextgit(){
hideGit.classList.toggle('show');
}

/* SKILLS WORDPRESS*/
let hideTextWp = document.getElementById('hideText_wp');
let hideWp = document.getElementById('hideWp');

hideText_wp.addEventListener('click', toggleTextwp);

function toggleTextwp(){
hideWp.classList.toggle('show');
}

/* SKILLS SQL*/
let hideTextSql = document.getElementById('hideText_sql');
let hideSql = document.getElementById('hideSql');

hideText_sql.addEventListener('click', toggleTextsql);

function toggleTextsql(){
hideSql.classList.toggle('show');
}

