const [...internalLinks] = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
const [...cardPlans] = document.querySelectorAll('.plans_card');

const selectedCard = 'select';

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: "smooth",
    block: 'start'
  });
}

internalLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
}) 

cardPlans.forEach(card => {
  card.addEventListener('click', () => {
   /*  if (card.classList.contains(selectedCard)) {
      card.classList.remove(selectedCard);
    } else {
      card.classList.add(selectedCard);
    } */
    card.classList.contains(selectedCard) ? card.classList.remove(selectedCard) : card.classList.add(selectedCard)
  });
});