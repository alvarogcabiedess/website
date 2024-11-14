function showTab(tabId) {
    // Ocultar todos los contenidos de las pestañas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Mostrar el contenido de la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}
