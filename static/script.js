document.querySelectorAll('.league-item').forEach(item => {
    item.addEventListener('click', function() {
        // Удаляем активный класс у всех элементов
        document.querySelectorAll('.league-item').forEach(el => {
            el.classList.remove('active');
        });
        // Добавляем активный класс к текущему элементу
        this.classList.add('active');
    });
});

