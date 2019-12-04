//pobieramy pierwszy element .btn-primary w elemencie .module
const btn = document.querySelector('.module .btn-primary');

//pobieramy pierwszy .btn w pierwszym li listy ul
const btnInFirstLi = document.querySelector('ul li:fist-of-type .btn');

//pobieram tytuł w module
const module = document.querySelector('.module');
const title = module.querySelector('.module-title');

//pobieram element .module który nie jest divem
const module = document.querySelector('.module:not(div)');

//pobieram paragrafy, ale te które nie są pierwszym dzieckiem swojego rodzica
const p = document.querySelector('p:not(:first-child)');