export default function inputmask() {
  const inputsTel = document.querySelectorAll('input[type="tel"]');
  const imTel = new Inputmask("+7 (999) 999 99-99");
  imTel.mask(inputsTel);
}
