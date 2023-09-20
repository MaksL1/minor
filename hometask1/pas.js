const click = document.getElementById('for click')
function edit(){
    const item = document.getElementsByTagName('div')[7]
    item.innerHTML = 'Иванов'
    const item1 = document.getElementsByTagName('div')[8]
    item1.innerHTML = 'Иван'}
click.addEventListener('click', edit)
