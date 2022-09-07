const para = document.querySelector('p');
para.style.fontSize = '50px';
window.addEventListener('keydown', changeSize);
function changeSize(e) {
  const fontSize = parseInt(para.style.fontSize.replace(/px/, ''));
  if(e.keyCode == '38') {
    para.style.fontSize = fontSize + 10 + 'px';
    console.log(fontSize);
    if(fontSize === 150) {
    para.textContent = '💥';
    window.removeEventListener('keydown', changeSize);
   }
  } else if(e.keyCode == '40') {
    if(fontSize >= 60) {
      para.style.fontSize = fontSize - 10 + 'px';
      console.log(fontSize);
    }
  }
};