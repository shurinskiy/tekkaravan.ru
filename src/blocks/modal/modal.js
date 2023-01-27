import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
	addUnderlay('modal');
	makeModalFrame({ 
		el: '.header__login, .header__logout, .navi__link_login, .form__small a', 
		scrollLock,
		open: function(el) {
			Inputmask({
				"mask": "+7 (999) 999-99-99", 
				showMaskOnHover: false
			}).mask(document.querySelectorAll('.form__field input[type="tel"]'));
					
			document.querySelectorAll('.form__field_pass button').forEach(button => {
				button.addEventListener('click', () => {
					const inp = button.previousElementSibling;
		
					inp.getAttribute('type') == 'password' ? inp.setAttribute('type', 'text') : inp.setAttribute('type', 'password');
					button.classList.toggle('active');
				});
			});
		}
	});

})();