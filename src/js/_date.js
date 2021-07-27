const today = new Date();
const year = today.getFullYear().toString();
const footer = document.querySelector('.footer-copy');

export const showYear = () => {
    footer.innerHTML = 'Nikolaos Kalfas &copy; ' + year;
}