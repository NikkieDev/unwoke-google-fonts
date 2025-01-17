setTimeout(() => {
  const sampleItems = [".hero__text-sample", "[contenteditable]", ".text-container"];

  document.querySelectorAll(sampleItems.join(', ')).forEach(sample => {
    sample.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  })
}, 500)