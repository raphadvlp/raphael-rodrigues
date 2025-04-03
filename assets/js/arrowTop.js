function showBtn() {
    if(window.scrollY < 46 || window.scrollY === 0) {
        document.querySelector('.arrow-top').style.display = 'none';
    } else {
        document.querySelector('.arrow-top').style.display = 'block';
    }
}

window.addEventListener('scroll', showBtn);
