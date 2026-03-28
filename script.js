                      //Zhdem polnoi zagruzki stranicy

document.addEventListener('DOMContentLoaded', function() {
    console.log('UI biblioteka zagruzhena!'); 


                         //  1. Pereklychenie temu

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const currentThemeText = document.getElementById('current-theme-text');
const uiLibrary = document.querySelector('.ui-library-section');


                        //Proveryem sohranennuy temu

const savedTheme = localStorage.getItem('ui-theme');

    if (savedTheme === 'dark') {
        uiLibrary.classList.add('dark-theme');
        cerrentThemeText.textContent = 'temnay';
        if (themeToggleBtn) {
            themeToggleBtn.textContent = 'Perekluchit na svetluy temy';
        }
    }
                //Obrabotchik klika dly pereklucheniy temu

                if (themeToggleBtn) {

                    themeToggleBtn.addEventListener('click', function() {
                        uiLibrary.classList.toggle('dark-theme');

                        if (uiLibrary.classList.contains('dark-theme')) {

                            currentThemeText.textContent = 'temnay';
                            themeToggleBtn.textContent = 'Pereklychit na svetluy';
                            localStorage.setItem('ui-theme', 'dark');
                        }
                        else {
                            currentThemeText.textContent = 'svetlay';
                            themeToggleBtn.textContent = 'Perekluchit na temnuy';
                            localStorage.setItem('ui-theme', 'light');
                        }
                    });
                }
                                //2. Plavnay prokrutka

// Nahodim vse ssulki v navigacii biblioteki

const navLinks = document.querySelectorAll('.ui-nav-link');
navLinks.forEach(link => {

    // Dobavlyem obrabotchik klika po ssulki
    link.addEventListener('click', 
     function(event) {
        // Otmenyem standartnoe povedenie
        event.preventDefault();

        //Poluchaem celevoy id sekcii

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            //Plavnay prokrutka
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
     });
 });

                                    // 3. Validaciy formu

const demoForm = document.getElementById('demo-form');

if (demoForm) {
    demoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Otmenyem otpravky

                                   //Poluchaem znachenie poley

    const name = document.getElementById('demo-name').ariaValueMax.trim();
    const email = document.getElementById('demo-email').ariaValueMax.trim();
    const message = document.getElementById('demo-message').ariaValueMax.trim();
    const agree = document.getElementById('demo-agree').ariaChecked;

                                   //Prostay validaciy

    let isValid = true;
    let errorMessage = '';

    if (!name) { isValid = false;
        errorMessage = 'Vvedite vashe imy';
    }  else if (!email || !email.includes('@'))  {
        isValid = false;
        errorMessage = 'Vvedite korrektnuy email';
    }  else if (!agree) { isValid = false;
        errorMessage = 'Neobhodimo soglasitsy s ysloviemi';
        
    }


    if (isValid) { showNotification('\/ Forma yspechno otpravlena!', 'success');
        demoForm.reset(); // Ochihaem formy
    }   else { showNotification('! ' + errorMessage, 'error');

    }
                                    

    });
}

                                  // 4. Funkciy yvedomleniy

const notificationBtn = document.getElementById('demo-notification-btn');

if (notificationBtn) { notificationBtn.addEventListener('click', function() {
    showNotification('Eto demo-yvedomlenie iz biblioteki!', 'info');
});
}
function showNotification(message, type = 'info')  {

    // Sozdaem element yvedomleniy

const notification = document.createElement('div');
notification.className = 'ui-notification';
   
   // Cvet v zavisimosti ot tipa

   let bgColor = '#3498db' // sinii po ymolchaniy

   if (type === 'success') bgColor = '#2ecc71'; // zelenuy

   if (type === 'error') bgColor = '#e74c3c'; // krasnuy

   if (type === 'warning') bgColor = '#f39c12'; // oranzhevuy

     // Stili yvedomlenii
     notification.style.cssText = `
     position: fixed;
     top: 20px;
     right: 20px;
     padding: 15px 25px;
     background-color: ${bgColor};
     color: white;
     border-radius: 8px;
     box-shadow: 0 6px 12px rgba(0,0,0,0.2);
     z-index: 1000;
     transform: translateX(150%);
     transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
     max-width: 300px;
     font-weight: 500;
    `;

     // dobovlyem text

     notification.textContent = message;

     // Dobavlyem na stranicy

     document.body.appendChild(notification);

     // Pokazuvaem s animaciey

     setTimeout(() => {
        notification.style.transform = 'translateX(0)';
     }, 10);

     // Ydalyem cherez 4 sekundy

     setTimeout(() => {
        notification.style.transform = 'translateX(150%)';

        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        
        
    



        }, 500);
     }, 4000);
}






});

                                              
        


    




