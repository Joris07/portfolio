<script setup>
	import Header from './components/Header/Header.vue';
	import Main from './components/Main/Main.vue';
</script>

<template>
	<Header />
	<Main />
</template>

<script>
	export default {
		name: 'App',
		mounted() {
			this.setupIntersectionObserver();
			this.setupClickHandlers();
			this.slideInOnScroll();
			window.onbeforeunload = () => {
				window.scrollTo(0, 0);
			};
		},
		methods: {
			setupIntersectionObserver() {
				const observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							let targetId = entry.target.getAttribute('id');
							let link = document.querySelector(`#nav_menu a[href="#${targetId}"]`);
							if (link) {
								link.childNodes[0].style.width = "70px";
								link.childNodes[0].style.borderTop = "2px solid var(--color-bleu)";
								link.style.color = "var(--color-bleu)";
								document.querySelectorAll(`#nav_menu a`).forEach(function(element) {
									if (element.href != link.href) {
										element.childNodes[0].style.width = "";
										element.childNodes[0].style.borderTop = "";
										element.style.color = "";
									}
								});
							}
						}
					});
				},
				{ threshold : .8 });

				const sections = document.querySelectorAll('.observer');
				sections.forEach(section => {
					observer.observe(section);
				});
			},
			setupClickHandlers() {
			document.querySelectorAll(`#nav_menu a`).forEach(element => {
				element.addEventListener("click", param => {
					param.target.style.color = "var(--color-bleu)";
					param.target.childNodes[0].style.width = "70px";
					param.target.childNodes[0].style.borderTop = "2px solid var(--color-bleu)";
					document.querySelectorAll(`#nav_menu a`).forEach(function(element) {
						if (element.href != param.target.href) {
							element.childNodes[0].style.width = "";
							element.childNodes[0].style.borderTop = "";
							element.style.color = "";
						}
					});
				});
			});
			},
			slideInOnScroll() {
			let elementToShow = document.querySelectorAll(".to_slide");

			function checkScroll() {
				elementToShow.forEach(elem => {
					let windowHeight = window.innerHeight;
					let divTop = elem.getBoundingClientRect().top;

					if (divTop < windowHeight && divTop > 0) {
						elem.classList.add('slide-in');
					}
				});
			}

			window.addEventListener('scroll', checkScroll);
			}
		}
	}
</script>