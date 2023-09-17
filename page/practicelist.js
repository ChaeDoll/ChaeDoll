'use strict'
function sideList() {
    const fileName = ['default', 'form', 'grid', 'heading', 'id,class', 'input', 'layout', 'list', 'table', 'tag']
    const practiceContainer = document.getElementById('practice_list');
    const resultHTML = fileName.map(item => {
        return `<li class="practice_item"><a href="./practice/${item}.html" target='_blank'>${item}</a></li>`;
    }).join('');
    practiceContainer.innerHTML = resultHTML;
}
document.addEventListener('DOMContentLoaded',()=>{
    sideList();
})