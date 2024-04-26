window.addEventListener("DOMContentLoaded", function () {
  //header toggle-menu
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");

    const isOpen = dropDownMenu.classList.contains("open");
    toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

  //owl-carousel

  $(document).ready(function () {
    // Sayfa tamamen yüklendiğinde çalışacak kodlar buraya yazılır
    $(".slider-owl").owlCarousel({
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });

  //home ve about hissesindeki video-nun acilib baglanmasi

  let popup_btn = document.querySelector(".video-popup-btn");
  let close_popup_btn = document.querySelector(".popup-close-btn");
  let popup_video_backgruond = document.querySelector(
    ".popup-video-background"
  );
  let popup_video_main_holder = document.querySelector(
    ".popup-video-main-holder"
  );
  let iframeSrc = document.querySelector(".iframe-holder iframe").src;

  popup_btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    popup_video_backgruond.classList.add("popup-show");
    popup_video_main_holder.classList.add("popup-show");
    document.querySelector(".iframe-holder iframe").src = iframeSrc;
  });

  close_popup_btn.addEventListener("click", function () {
    document.body.style.overflow = "";
    popup_video_backgruond.classList.remove("popup-show");
    popup_video_main_holder.classList.remove("popup-show");
    document.querySelector(".iframe-holder iframe").src = "";
  });
});

// courses hissesindeki search inputunda inputun temizlenmesi
// ve inputun icinde x duymesinin gorunub ortadan qaldirilmasi

let courseSearchInput = document.querySelector(
  ".courses-area .container .row .col-12 .course-form .input-div .course-search-input"
);
let courseClearBtn = document.querySelector(
  ".courses-area .container .row .col-12 .course-form .input-div .course-clear-btn"
);

courseSearchInput.addEventListener("input", function () {
  courseClearBtn.classList.add("clear-btn-yes");
});

courseClearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  courseSearchInput.value = "";
  courseClearBtn.classList.remove("clear-btn-yes");
});
