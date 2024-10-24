/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Header Search


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initHeaderSearch();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Header Search

	*/

	function initHeaderSearch()
	{
		if($('.search_button').length)
		{
			$('.search_button').on('click', function()
			{
				if($('.header_search_container').length)
				{
					$('.header_search_container').toggleClass('active');
				}
			});
		}
	}

	// https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
	Number.prototype.pad = function(size) {
		var s = String(this);
		while (s.length < (size || 2)) {s = "0" + s;}
		return s;
	}


	const dueDate = new Date($("#due-date").html()).getTime();
	const showRemainingTime = () => {
		const now = new Date().getTime();

		// Find the distance between now and the count down date
		const distance = Math.max(0, dueDate - now);

		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24)).pad(2);
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).pad(2);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).pad(2);
		const seconds = Math.floor((distance % (1000 * 60)) / 1000).pad(2);

		$("#remaining-time").html(`${days}:${hours}:${minutes}:${seconds}`);

		return distance > 0;
	}

	showRemainingTime();
	// https://www.w3schools.com/howto/howto_js_countdown.asp
	let interval = setInterval(() => {
		const shouldContinue = showRemainingTime();
		if (!shouldContinue)
			clearInterval(interval);
	}, 1000);


	// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
	function fallbackCopyTextToClipboard(text, success) {
		var textArea = document.createElement("textarea");
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = "0";
		textArea.style.left = "0";
		textArea.style.position = "fixed";

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			if(document.execCommand('copy'))
				success()
			else throw new Error();
		} catch (err) {
			console.error('Copy failed :(', err);
		}

		document.body.removeChild(textArea);
	}

	$("i.fa-copy").click(function(){
		const text = $(this).prev().html().replace("&lt;", "<").replace("&gt;", ">").trim();
		const obj = this;

		const success = function() {
			$(obj).attr("data-original-title", "copied!").tooltip('show');
		}

		if (navigator.clipboard){
			navigator.clipboard.writeText(text);
			success()
		}
		else
			fallbackCopyTextToClipboard(text, success);
	}).mouseleave(function() {
		$(this).attr("data-original-title", "copy")
	})


	$(function () {
		$("i.fa-copy").attr("data-placement", "top").attr("data-original-title", "copy").tooltip()
	})

	$(function () {
	})
});