/* ============================================
   TAMDEEN STEEL - Website Interactions
   ============================================ */

// Global language switcher
function switchLang(lang) {
	document.cookie = 'preferred_language=' + lang + ';path=/;max-age=31536000;SameSite=Lax';
	var url = new URL(window.location.href);
	url.searchParams.set('_lang', lang);
	window.location.href = url.toString();
}

document.addEventListener('DOMContentLoaded', function () {

	// ---- Navbar scroll effect ----
	var nav = document.querySelector('.tamdeen-nav');
	if (nav) {
		window.addEventListener('scroll', function () {
			nav.classList.toggle('scrolled', window.scrollY > 80);
		});
	}

	// ---- Mobile hamburger toggle ----
	var hamburger = document.querySelector('.nav-hamburger');
	var navLinks = document.querySelector('.nav-links');
	if (hamburger && navLinks) {
		hamburger.addEventListener('click', function () {
			navLinks.classList.toggle('open');
			hamburger.classList.toggle('active');
		});
		navLinks.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				navLinks.classList.remove('open');
				hamburger.classList.remove('active');
			});
		});
		// Close on clicking overlay background
		navLinks.addEventListener('click', function (e) {
			if (e.target === navLinks) {
				navLinks.classList.remove('open');
				hamburger.classList.remove('active');
			}
		});
	}

	// ---- Scroll animations ----
	var animEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
	if (animEls.length > 0 && 'IntersectionObserver' in window) {
		var obs = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });
		animEls.forEach(function (el) { obs.observe(el); });
	} else {
		animEls.forEach(function (el) { el.classList.add('visible'); });
	}

	// ---- Counter animation ----
	var statNums = document.querySelectorAll('.stat-number');
	if (statNums.length > 0 && 'IntersectionObserver' in window) {
		var sObs = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) { animateCounter(entry.target); sObs.unobserve(entry.target); }
			});
		}, { threshold: 0.5 });
		statNums.forEach(function (el) { sObs.observe(el); });
	}

	function animateCounter(el) {
		var target = parseInt(el.getAttribute('data-target'), 10);
		var suffix = el.getAttribute('data-suffix') || '';
		var duration = 2000, startTime = null;
		function step(ts) {
			if (!startTime) startTime = ts;
			var p = Math.min((ts - startTime) / duration, 1);
			var eased = 1 - Math.pow(1 - p, 3);
			el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
			if (p < 1) requestAnimationFrame(step);
			else el.textContent = target.toLocaleString() + suffix;
		}
		requestAnimationFrame(step);
	}

	// ---- Video play/pause ----
	var videoEl = document.getElementById('tamdeen-video');
	var playBtn = document.getElementById('video-play-btn');
	if (videoEl && playBtn) {
		function toggleVideo() {
			if (videoEl.paused) {
				videoEl.play();
				videoEl.setAttribute('controls', 'controls');
				playBtn.classList.add('hidden');
			} else {
				videoEl.pause();
				videoEl.removeAttribute('controls');
				playBtn.classList.remove('hidden');
			}
		}
		playBtn.addEventListener('click', function (e) { e.stopPropagation(); toggleVideo(); });
		videoEl.addEventListener('click', toggleVideo);
		videoEl.addEventListener('ended', function () {
			videoEl.removeAttribute('controls');
			playBtn.classList.remove('hidden');
		});
	}

	// ---- Smooth scrolling ----
	document.querySelectorAll('a[href^="#"]').forEach(function (a) {
		a.addEventListener('click', function (e) {
			var id = this.getAttribute('href');
			if (id === '#') return;
			var target = document.querySelector(id);
			if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
		});
	});

	// ---- Hero parallax ----
	var heroBg = document.querySelector('.hero-video-bg');
	if (heroBg) {
		window.addEventListener('scroll', function () {
			if (window.scrollY < window.innerHeight) {
				heroBg.style.transform = 'translateY(' + (window.scrollY * 0.3) + 'px)';
			}
		});
	}

});
