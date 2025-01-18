const buttons = document.querySelectorAll('.button');

function updateText(value) {
  console.log("Update text_used to " + value)
  localStorage.setItem('text_used', value);

  chrome.storage.local.set({'text_used': value});
  
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    setTimeout(() => chrome.tabs.reload(tabs[0].id), 500);
  });
};

function buttonUpdateUI() {
  buttons.forEach(btn => {
    const activeButton = document.querySelector('.button--active');
    
    if (btn !== activeButton) {
      btn.addEventListener('click', e => {
        updateText(btn.getAttribute('data-value'));
      });
    }
  });
}

buttonUpdateUI();