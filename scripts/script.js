const team_content = document.querySelector('.about-company_team_content');
const vacancies_content = document.querySelector('.about-company_vacancies_content');
const about_titles = document.querySelectorAll('.about-company_text');
const lisencies_content = document.querySelector('.about-company_lisencies_content');
function searchAppear(event) {
    event.target.nextElementSibling.style.display = 'block';
}

function chooseTeam(event) {
    event.target.classList.add('active');
    about_titles[1].classList.remove('active');
    about_titles[2].classList.remove('active');
    team_content.classList.add('block');
    vacancies_content.classList.remove('block');
    lisencies_content.classList.remove('block');
}

function chooseVacancies(event) {
    event.target.classList.add('active');
    about_titles[0].classList.remove('active');
    about_titles[2].classList.remove('active');
    team_content.classList.remove('block');
    vacancies_content.classList.add('block');
    lisencies_content.classList.remove('block');
}

function chooseLisences(event) {
    event.target.classList.add('active');
    about_titles[0].classList.remove('active');
    about_titles[1].classList.remove('active');
    team_content.classList.remove('block');
    vacancies_content.classList.remove('block');
    lisencies_content.classList.add('block');
}