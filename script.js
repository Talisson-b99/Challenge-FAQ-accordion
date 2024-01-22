
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      toggleAccordion(header);
    });
  });


function toggleAccordion(clickedHeader) {
  const clickedItem = clickedHeader.parentElement;
  const clickedContent = clickedItem.querySelector('.accordion-content');
  const clickedSvg = clickedItem.querySelector('.svg');
  const isOpen = clickedContent.classList.contains('is-active');

  closeAllAccordions();
  
  if (!isOpen) {
    clickedContent.classList.add('is-active');
    clickedSvg.src = './assets/minus.svg';
  }
}

function closeAllAccordions() {
  const allItems = document.querySelectorAll('.accordion-item');

  allItems.forEach(item => {
    const content = item.querySelector('.accordion-content');
    const svg = item.querySelector('.svg');

    content.classList.remove('is-active');
    svg.src = './assets/max.svg';
  });
}
