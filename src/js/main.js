window.addEventListener("DOMContentLoaded", function () {
  //header roggle-menu
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");

    const isOpen = dropDownMenu.classList.contains("open");
    toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

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
