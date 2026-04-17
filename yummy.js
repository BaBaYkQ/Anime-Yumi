// Вся логіка плагіна обгорнута в самовиконувану функцію для ізоляції
(function() {
    // Захист від випадкового подвійного завантаження плагіна
    if (window.yummy_plugin_loaded) return;
    window.yummy_plugin_loaded = true;

    // Функція, яка запустить всю логіку плагіна
    const startPlugin = function() {
        // Тут буде основна логіка
        console.log('YummyAnime Plugin Started!');
    };

    // Чекаємо, поки Lampa повністю завантажиться, перш ніж запускати плагін
    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', (e) => {
            if (e.type === 'ready') startPlugin();
        });
    }
})();
