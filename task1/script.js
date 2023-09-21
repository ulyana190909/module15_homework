document.addEventListener('DOMContentLoaded', function() {
    const btn = document.body.querySelector('.btn');
    const btnIcon = document.body.querySelector('.btn-icon')
    
    btn.addEventListener('click', function() {
        btnIcon.classList.toggle('btn-icon-active');
        btnIcon.classList.toggle('btn-icon-inactive');
    });
})