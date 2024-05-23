document.getElementById('openDialogBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});

// document.getElementById('closeDialogBtn').addEventListener('click', function() {
//     const overlay = document.getElementById('overlay');
//     const dialog = document.querySelector('.dialog');
    
//     dialog.classList.add('fadeOut');
    
//     dialog.addEventListener('animationend', function() {
//         overlay.style.display = 'none';
//         dialog.classList.remove('fadeOut');
//     }, { once: true });
// });