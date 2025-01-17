const previewItems = '.hero__text-sample, [contenteditable]';
const customPreview = '.text-container'

const availableTexts = {
  lorem: 1,
  fox: 2,
};

let storedText;

chrome.storage.local.get(['text_used']).then(result => {
  storedText = parseInt(result.text_used);
  setTimeout(() => {
    const pageText = document.querySelectorAll('[contenteditable], .text-container, .hero__text-sample');
    const fox = "The quick brown fox jumps over the lazy dog ";
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  
    pageText.forEach(textField => {
      const fontSize = parseInt(window.getComputedStyle(textField, null).getPropertyValue('font-size'));
  
      if (storedText == availableTexts.fox) {
        textField.textContent = fontSize <= 24 ? fox.repeat(20) : fox.repeat(3);
      } else if (storedText == availableTexts.lorem) {
        textField.textContent = fontSize <= 24 ? lorem.repeat(3) : lorem;
      } else {
        return;
      }
    });
  }, 500);
});



// setTimeout(() => {
  
//   const sampleItems = [".hero__text-sample", "[contenteditable]", ".text-container"];

//   document.querySelectorAll(sampleItems.join(', ')).forEach(sample => {
//     sample.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   })
// }, 500)