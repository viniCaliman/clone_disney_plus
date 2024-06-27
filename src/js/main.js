document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(btn) {
            const target = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${target}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');   
            removeActiveButton();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    });
})

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    tabsContainer.forEach(tab => {
        tab.classList.remove('shows__list--is-active');
    })
}
function removeActiveButton () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    });
}