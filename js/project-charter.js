// Project charter

const allProject = document.querySelectorAll(".project"); //lấy tất cả project

// ban đầu ẩn tất cả project
allProject.forEach((element) => {
  element.classList.add("hidden");
});

// kiểm tra xem địa chỉ URL hiện tại có chứa chuỗi ký tự "project-cv" hay không.
if (document.location.href.includes("project-cv")) {
  document.querySelector("#project-cv").classList.remove("hidden");
  document.querySelector("title").textContent = "Project charter CV Web";
}

// kiểm tra xem địa chỉ URL hiện tại có chứa chuỗi ký tự "project-pets" hay không.
if (document.location.href.includes("project-pets")) {
  document.querySelector("#project-pets").classList.remove("hidden");
  document.querySelector("title").textContent = "Project charter Pets Web";
}

// kiểm tra xem địa chỉ URL hiện tại có chứa chuỗi ký tự "project-news" hay không.
if (document.location.href.includes("project-news")) {
  document.querySelector("#project-news").classList.remove("hidden");
  document.querySelector("title").textContent = "Project charter News Web";
}

// trở về trang index khi click trên document
document.addEventListener("click", function () {
  window.location.href = "index.html";
});
