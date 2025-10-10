document.addEventListener('DOMContentLoaded', () => {
  const journeyComponent = document.querySelector('[data-component="journey-tabs"]');
  if (!journeyComponent) return;

  const tabs = Array.from(journeyComponent.querySelectorAll('[data-journey-trigger]'));
  const panels = Array.from(journeyComponent.querySelectorAll('.journey-panel'));

  const activateTab = (targetKey) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.journeyTrigger === targetKey;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach((panel) => {
      const isActive = panel.id === `journey-${targetKey}`;
      panel.classList.toggle('is-active', isActive);
      if (isActive) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  };

  const handleTabClick = (event) => {
    const target = event.currentTarget.dataset.journeyTrigger;
    activateTab(target);
    event.currentTarget.focus();
  };

  const handleKeydown = (event) => {
    const currentIndex = tabs.indexOf(event.currentTarget);
    if (currentIndex === -1) return;

    let nextIndex = null;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    activateTab(nextTab.dataset.journeyTrigger);
    nextTab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', handleTabClick);
    tab.addEventListener('keydown', handleKeydown);
    tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
  });
});
