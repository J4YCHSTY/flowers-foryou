
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Selamat ulang tahun, cinta ter-uwu-ku! 🤍, Love you to the moon and back wleowleowleo :3').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); 
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};