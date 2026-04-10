const button = document.getElementById('btn');
const con = document.querySelector('.container');

button.addEventListener('click', () => {
    con.classList.toggle('active');
});