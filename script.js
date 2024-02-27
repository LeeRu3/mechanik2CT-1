document.addEventListener('DOMContentLoaded', function () {
    const folders = document.querySelectorAll('.folder span');

    folders.forEach(function (folder) {
        folder.addEventListener('click', function () {
            const nestedList = folder.parentElement.querySelector('ul');
            folder.parentElement.classList.toggle('open');
            nestedList.style.display = nestedList.style.display === 'none' ? 'block' : 'none';
        });
    });
});
