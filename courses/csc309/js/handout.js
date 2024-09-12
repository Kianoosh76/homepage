/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Header Search


******************************/

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var header = $(".header");
  var menuActive = false;
  var menu = $(".menu");
  var burger = $(".hamburger");

  setHeader();

  $(window).on("resize", function () {
    setHeader();
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initMenu();
  initHeaderSearch();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".menu").length) {
      var menu = $(".menu");
      if ($(".hamburger").length) {
        burger.on("click", function () {
          if (menuActive) {
            closeMenu();
          } else {
            openMenu();

            $(document).one("click", function cls(e) {
              if ($(e.target).hasClass("menu_mm")) {
                $(document).one("click", cls);
              } else {
                closeMenu();
              }
            });
          }
        });
      }
    }
  }

  function openMenu() {
    menu.addClass("active");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    menuActive = false;
  }

  /* 

	4. Init Header Search

	*/

  function initHeaderSearch() {
    if ($(".search_button").length) {
      $(".search_button").on("click", function () {
        if ($(".header_search_container").length) {
          $(".header_search_container").toggleClass("active");
        }
      });
    }
  }

  // https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
  Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  };

  const dueDate = new Date($("#due-date").html()).getTime();
  const showRemainingTime = () => {
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = Math.max(0, dueDate - now);

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)).pad(2);
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).pad(2);
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).pad(
      2
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).pad(2);

    $("#remaining-time").html(`${days}:${hours}:${minutes}:${seconds}`);

    return distance > 0;
  };

  showRemainingTime();
  // https://www.w3schools.com/howto/howto_js_countdown.asp
  let interval = setInterval(() => {
    const shouldContinue = showRemainingTime();
    if (!shouldContinue) clearInterval(interval);
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
      if (document.execCommand("copy")) success();
      else throw new Error();
    } catch (err) {
      console.error("Copy failed :(", err);
    }

    document.body.removeChild(textArea);
  }

  $("i.fa-copy")
    .click(function () {
      const text = $(this)
        .prev()
        .html()
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&amp;", "&")
        .trim();
      const obj = this;

      const success = function () {
        $(obj).attr("data-original-title", "copied!").tooltip("show");
      };

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        success();
      } else fallbackCopyTextToClipboard(text, success);
    })
    .mouseleave(function () {
      $(this).attr("data-original-title", "copy");
    });

  $(function () {
    $("i.fa-copy")
      .attr("data-placement", "top")
      .attr("data-original-title", "copy")
      .tooltip();
  });

  $(function () {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    $("#due-date2").html(
      new Date(dueDate).toLocaleDateString("en-us", options)
    );
  });

  /**
   * Handout markdown rendering
   */

  loadHandout();

  // Function to get query parameters from the URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Function to set query parameters in the URL
  function setQueryParam(param, value) {
    const urlParams = new URLSearchParams(window.location.search);
    if (value === undefined) {
      urlParams.delete(param);
    } else {
      urlParams.set(param, value);
    }
    window.location.search = urlParams.toString();
    window.history.pushState({}, "", url);
  }

  // Main function to handle the process
  function loadHandout() {
    const source = getQueryParam("source");
    const randomNumber = Math.floor(Math.random() * 1000);
    const randomNumber2 = Math.floor(Math.random() * 1000);
    if (source) {
      document
        .getElementById("markdown_content")
        .setAttribute(
          "src",
          "./" +
            source +
            "/" +
            source +
            ".md" +
            "?v=" +
            randomNumber +
            "." +
            randomNumber2
        );
      document.getElementById("handout_title").innerHTML = source + " Handout";
    }
  }

  function fakeSubmit(event) {
    event.preventDefault();
    alert(
      "Thank you so much for writing your feedback.\n\nAs you may already have guessed, your feedback is neither saved nor sent anywhere. In fact, no one will ever even know that you wrote such feedback. " +
        "The reason is that it is not possible for this website to store and present such stuff. Throughout this course, you will learn why.\n\n" +
        "Now, please copy your feedback to piazza or email it to me or a TA :)"
    );
  }

  $(".comment_form").submit(fakeSubmit);

  function checkFullscreen() {
    const fullscreen = getQueryParam("fullscreen");
    if (fullscreen === "true") {
      $("header").hide();
      $(".blog_content + hr").hide();
      $("footer").hide();
      $(".comments_container").hide();
      $(".blog").css("padding-bottom", "10px");
      $(".blog > .container > .row").children().slice(1).hide();
      $(".blog > .container > .row > div:first-child").removeClass("col-lg-8");
      $(".breadcrumbs_container .col-lg-4")
        .removeClass("col-lg-4")
        .addClass("col-lg-6");
      $(".breadcrumbs_container .col-lg-6")
        .css("padding-left", 0)
        .css("padding-right", 0);
      $("#fullscreen_link span").text("Exit Fullscreen");
      $("#fullscreen_link i")
        .removeClass("fa-up-right-and-down-left-from-center")
        .addClass("fa-down-left-and-up-right-to-center");

      if (window.innerWidth < 768) {
        $(".home").css("height", "80px");
      } else {
        $(".home").css("height", "50px");
      }
    }
  }

  checkFullscreen();

  function handleFullscreenLink() {
    const fullscreen = getQueryParam("fullscreen");
    if (fullscreen === "true") {
      setQueryParam("fullscreen", undefined);
    } else {
      setQueryParam("fullscreen", "true");
    }
  }

  $("#fullscreen_link").click(handleFullscreenLink);

  function checkPrint() {
    const fullscreen = getQueryParam("fullscreen");
    const print = getQueryParam("print");
    if (fullscreen === "true" && print === "true") {
      $(".breadcrumbs_container").hide();
      $("<style>")
        .prop("type", "text/css")
        .html(
          ".blog_content p { font-size: 18px; }\n" +
            ".blog_content p code { font-size: 16px; }\n" +
            ".blog_content code { font-size: 14px; }\n" +
            ".blog_content li { font-size: 18px; }\n" +
            ".blog_content table { font-size: 18px; }\n" +
            ".blog_content h2 { font-size: 26px; }\n" +
            ".blog_content h3 { font-size: 22px; }"
        )
        .appendTo("head");
    }
  }

  checkPrint();
});
