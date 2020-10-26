(function() {

    const navbar = document.querySelector("#nav");
    const navBtn = document.querySelector("#nav-btn");
    const closeBtn = document.querySelector("#close-btn");
    const sidebar = document.querySelector("#sidebar");
    const date = document.querySelector("#date");


  const setScrollableNavbar = function() {
    console.log(" calling setScrollableNavbar");
    // add fixed class to navbar
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    });
  }

  const showSidebar = function() {
    console.log(" calling showSidebar");
    navBtn.addEventListener("click", function () {
      sidebar.classList.add("show-sidebar");
    });
  }

  const hideSidebar = function() {
    console.log(" calling hideSidebar");
    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("show-sidebar");
    });
  }

  const turnOnScrolling = function() {
    console.log("calling turnOnScrolling");
    document.querySelectorAll('.nav-links a, .sidebar-links a, a.hero-btn').forEach(item => {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        if (sidebar.classList.contains("show-sidebar")) {
          //console.log("sidebar open");
          sidebar.classList.remove("show-sidebar");
        }

        let scrollTo = this.getAttribute("data-id");
        document.querySelector("#" + scrollTo).scrollIntoView({behavior: 'smooth', block: 'center'});
      })
    });
  }

  const setYear = function() {
    date.innerHTML = new Date().getFullYear();
  }


  setScrollableNavbar();
  showSidebar();
  hideSidebar();
  turnOnScrolling();
  setYear();

})();
















