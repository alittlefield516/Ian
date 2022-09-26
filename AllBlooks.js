let lockedBlooksOuter = document.querySelectorAll('.styles__noClick___2tMga-camelCase');
lockedBlooksOuter.forEach(outer => {
  outer.classList.remove('styles__noClick___2tMga-camelCase');
  outer.querySelector('.styles__lockedBlook___3Ii_E-camelCase').classList.remove('styles__lockedBlook___3Ii_E-camelCase');
  outer.querySelector('i').style.display = 'none';
});
