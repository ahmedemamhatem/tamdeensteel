/* ============================================
   TAMDEEN STEEL - Website Interactions
   ============================================ */

// ---- Global Language Switcher ----
function switchLang(lang) {
	// Set the preferred_language cookie (Frappe convention)
	document.cookie = 'preferred_language=' + lang + ';path=/;max-age=31536000;SameSite=Lax';

	// Build new URL preserving path and hash but updating _lang
	var url = new URL(window.location.href);
	url.searchParams.set('_lang', lang);
	window.location.href = url.toString();
}

document.addEventListener('DOMContentLoaded', function () {

	// ---- LOGIN PAGE: Inject branded visual panel ----
	if (document.body.getAttribute('data-page') === 'login' || window.location.pathname === '/login') {
		injectLoginVisual();
	}

	function injectLoginVisual() {
		// Don't duplicate
		if (document.querySelector('.tamdeen-login-visual')) return;

		var visual = document.createElement('div');
		visual.className = 'tamdeen-login-visual';
		visual.innerHTML = '' +
			'<div class="visual-bg" style="background-image: url(/assets/tamdeensteel/img/furnace-interior.jpeg);"></div>' +
			'<div class="visual-gradient"></div>' +
			'<div class="particle"></div>' +
			'<div class="particle"></div>' +
			'<div class="particle"></div>' +
			'<div class="particle"></div>' +
			'<div class="particle"></div>' +
			'<div class="visual-content">' +
				'<img class="visual-logo" src="/assets/tamdeensteel/img/logo.jpeg" alt="Tamdeen Steel">' +
				'<h2>Forging the <span>Future</span> of Steel</h2>' +
				'<p>Welcome to the Tamdeen Steel management portal. Access your orders, track production, and manage your steel business.</p>' +
				'<div class="visual-stats">' +
					'<div class="visual-stat"><h4>15+</h4><p>Years Experience</p></div>' +
					'<div class="visual-stat"><h4>50K</h4><p>Tons Annually</p></div>' +
					'<div class="visual-stat"><h4>200+</h4><p>Clients Served</p></div>' +
				'</div>' +
			'</div>';

		document.body.insertBefore(visual, document.body.firstChild);

		// Add back-to-home link
		var mainContent = document.querySelector('.page-content-wrapper') || document.querySelector('.web-content') || document.querySelector('.main-section');
		if (mainContent) {
			var backLink = document.createElement('a');
			backLink.className = 'tamdeen-back-home';
			backLink.href = '/';
			backLink.innerHTML = '&#8592; Back to Website';
			mainContent.appendChild(backLink);
		}

		// Rotate background images
		var bgImages = [
			'/assets/tamdeensteel/img/furnace-interior.jpeg',
			'/assets/tamdeensteel/img/furnace-pouring.jpeg',
			'/assets/tamdeensteel/img/rolling-mill.jpeg',
			'/assets/tamdeensteel/img/steel-angles-closeup.jpeg',
			'/assets/tamdeensteel/img/flat-bars-warehouse.jpeg'
		];
		var bgIndex = 0;
		var bgEl = visual.querySelector('.visual-bg');

		setInterval(function () {
			bgIndex = (bgIndex + 1) % bgImages.length;
			bgEl.style.opacity = '0';
			setTimeout(function () {
				bgEl.style.backgroundImage = 'url(' + bgImages[bgIndex] + ')';
				bgEl.style.opacity = '0.35';
			}, 500);
		}, 5000);
	}


	// ---- Navbar scroll effect ----
	var nav = document.querySelector('.tamdeen-nav');
	if (nav) {
		window.addEventListener('scroll', function () {
			if (window.scrollY > 80) {
				nav.classList.add('scrolled');
			} else {
				nav.classList.remove('scrolled');
			}
		});
	}

	// ---- Mobile hamburger toggle ----
	var hamburger = document.querySelector('.nav-hamburger');
	var navLinks = document.querySelector('.nav-links');
	if (hamburger && navLinks) {
		hamburger.addEventListener('click', function () {
			navLinks.classList.toggle('open');
		});
		navLinks.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				navLinks.classList.remove('open');
			});
		});
	}

	// ---- Scroll animations (Intersection Observer) ----
	var animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
	if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });

		animatedElements.forEach(function (el) {
			observer.observe(el);
		});
	} else {
		// Fallback: show all
		animatedElements.forEach(function (el) {
			el.classList.add('visible');
		});
	}

	// ---- Counter animation for stats ----
	var statNumbers = document.querySelectorAll('.stat-number');
	if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
		var statsObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					animateCounter(entry.target);
					statsObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.5 });

		statNumbers.forEach(function (el) {
			statsObserver.observe(el);
		});
	}

	function animateCounter(el) {
		var target = parseInt(el.getAttribute('data-target'), 10);
		var suffix = el.getAttribute('data-suffix') || '';
		var duration = 2000;
		var start = 0;
		var startTime = null;

		function step(timestamp) {
			if (!startTime) startTime = timestamp;
			var progress = Math.min((timestamp - startTime) / duration, 1);
			var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
			var current = Math.floor(eased * target);
			el.textContent = current.toLocaleString() + suffix;
			if (progress < 1) {
				requestAnimationFrame(step);
			} else {
				el.textContent = target.toLocaleString() + suffix;
			}
		}
		requestAnimationFrame(step);
	}

	// ---- Smooth scrolling for anchor links ----
	document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			var targetId = this.getAttribute('href');
			if (targetId === '#') return;
			var targetEl = document.querySelector(targetId);
			if (targetEl) {
				e.preventDefault();
				targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	// ---- Parallax effect on hero ----
	var hero = document.querySelector('.tamdeen-hero');
	if (hero) {
		var videoBg = hero.querySelector('.hero-video-bg');
		window.addEventListener('scroll', function () {
			if (window.scrollY < window.innerHeight) {
				var offset = window.scrollY * 0.4;
				if (videoBg) {
					videoBg.style.transform = 'translateY(' + offset + 'px)';
				}
			}
		});
	}

});
