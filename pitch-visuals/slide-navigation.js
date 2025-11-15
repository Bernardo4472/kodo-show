// Slide Navigation Script
// Handles keyboard navigation between slides

(function() {
  // Get current slide number from filename
  const currentFile = window.location.pathname.split('/').pop();
  const slideMatch = currentFile.match(/(\d+)-/);
  const currentSlide = slideMatch ? parseInt(slideMatch[1], 10) : null;

  // Slide mapping
  const slides = [
    '01-hero.html',
    '02-how-it-works.html',
    '03-task-cards.html',
    '04-pr-machine.html',
    '05-architecture.html',
    '06-use-cases.html',
    '07-before-after.html',
    '08-closing.html'
  ];

  // Navigation functions
  function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
      window.location.href = slides[index];
    }
  }

  function goToNext() {
    if (currentSlide !== null && currentSlide < slides.length) {
      goToSlide(currentSlide); // currentSlide is 1-indexed (01-08), array is 0-indexed
    }
  }

  function goToPrevious() {
    if (currentSlide !== null && currentSlide > 1) {
      goToSlide(currentSlide - 2); // currentSlide is 1-indexed (01-08), array is 0-indexed
    }
  }

  function goToFirst() {
    goToSlide(0);
  }

  function goToLast() {
    goToSlide(slides.length - 1);
  }

  // Keyboard event handler
  document.addEventListener('keydown', function(e) {
    // Don't interfere with input fields or text areas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    switch(e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ': // Spacebar
        e.preventDefault();
        if (currentSlide !== null && currentSlide < slides.length) {
          goToSlide(currentSlide); // Next slide (currentSlide is 1-indexed: 01-08)
        }
        break;
      
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        if (currentSlide !== null && currentSlide > 1) {
          goToSlide(currentSlide - 2); // Previous slide (currentSlide is 1-indexed: 01-08)
        }
        break;
      
      case 'Home':
        e.preventDefault();
        goToFirst();
        break;
      
      case 'End':
        e.preventDefault();
        goToLast();
        break;
    }
  });

  // Add visual indicator for navigation (optional)
  const navHint = document.createElement('div');
  navHint.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 0.75rem;
    color: #909090;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  `;
  navHint.innerHTML = `
    <div style="margin-bottom: 4px; color: #ffffff;">Navigation</div>
    <div>← → Arrow keys</div>
    <div style="font-size: 0.7rem; margin-top: 4px; color: #606060;">Slide ${currentSlide || '?'} of ${slides.length}</div>
  `;
  document.body.appendChild(navHint);

  // Show hint on first keypress, then hide after 3 seconds
  let hintShown = false;
  document.addEventListener('keydown', function() {
    if (!hintShown) {
      navHint.style.opacity = '1';
      setTimeout(() => {
        navHint.style.opacity = '0';
      }, 3000);
      hintShown = true;
    }
  }, { once: true });
})();

