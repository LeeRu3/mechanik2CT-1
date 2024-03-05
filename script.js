document.addEventListener('DOMContentLoaded', function () {
    const folders = document.querySelectorAll('.folder span');

    folders.forEach(function (folder) {
        folder.addEventListener('click', function () {
            const nestedList = folder.parentElement.querySelector('ul');
            const topLevel = folder.closest('.file-tree').querySelectorAll('.folder span');
            if (folder.parentElement.classList.contains('open')) {
                folder.parentElement.classList.remove('open');
                nestedList.style.display = 'none';
            } else {
                topLevel.forEach(function (topFolder) {
                    const topNestedList = topFolder.parentElement.querySelector('ul');
                    topFolder.parentElement.classList.remove('open');
                    topNestedList.style.display = 'none';
                });
                folder.parentElement.classList.add('open');
                nestedList.style.display = 'block';
            }
        });
    });
});
