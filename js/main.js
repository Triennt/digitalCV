// ------ function -------------------
// hàm ẩn tất cả element chỉ định
const setHiddenAll = function (elements) {
  elements.forEach((element) => element.classList.add("hidden"));
};
// ẩn 1 element được chỉ định
const setHidden = function (element) {
  element.classList.add("hidden");
};
// hiện 1 element được chỉ định
const setShow = function (element) {
  element.classList.remove("hidden");
};
// thêm class box-shadow
const shadow = function (element) {
  element.classList.add("box-shadow");
};
// xóa class box-shadow
const unShadow = function (element) {
  element.classList.remove("box-shadow");
};
// thêm class dropdown
const dropDown = function (element) {
  element.classList.add("dropDown");
};
// -----------------------------------
// ----- Ẩn và hiện phần thông tin cá nhân -----
// ...lấy các phần tử ...
const info = document.querySelector(".info"); //phần info
const authentication = document.getElementById("authentication"); //form xác thực
const btnSubmit = document.getElementById("submit"); //nút submit
const formText = document.querySelector(".form-text");
// ......

setHidden(info); //gọi hàm để ẩn info
// sự kiện click vào nút submit
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault(); //chống reload trang
  const emailValue = document.getElementById("email").value; //lấy giá trị từ input gán vào biến emailvalue
  const checkmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(checkmail); //kiểm tra đinh dạng email
  if (check) {
    setShow(info); //hiện info
    setHidden(authentication); //ẩn form
  } else {
    formText.textContent = "Định dạng email không đúng vui lòng nhập lại.";
    formText.style.color = "red";
  }
});
// ---------------------------------------------------------------------------------------------
// ----- View more/view less và ẩn hiện thông tin phần nghề nghiệp -----------------------------
// ...lấy các phần tử ...
const allContentJobInfo = document.querySelectorAll(".content"); //lấy mảng tất cả class content
const allJobInfoCol = document.querySelectorAll(".job-info-col"); //lấy mảng tất cả các class job-info-col
const allBtnLess = document.querySelectorAll(".view-less"); //lấy mảng tất cả các nút view more
const allBtnMore = document.querySelectorAll(".view-more"); //lấy mảng tất cả các nút view less
// ......

setHiddenAll(allContentJobInfo); //ẩn tất cả class content
setHiddenAll(allBtnMore); //ânt tất cả nút view more

//quét qua các mục trong job-info
allJobInfoCol.forEach((element) => {
  let viewMoreOpening = false;
  // ...lấy các phần tử ...
  const btnViewMore = element.querySelector(".view-more"); //nút view more
  const btnViewLess = element.querySelector(".view-less"); //nút view less
  const ContainerJobInfo = element.querySelector(".job-info-container"); //container
  const ContentJobInfo = element.querySelector(".content"); //content
  // ......

  //sự kiện rê chuột vào phần tử
  element.addEventListener("mouseover", () => {
    setShow(btnViewMore); //ẩn nút view more
    shadow(ContainerJobInfo); //ẩn container

    //sự kiện click nút view more
    btnViewMore.addEventListener("click", () => {
      viewMoreOpening = true;
      setShow(ContentJobInfo);
      dropDown(ContentJobInfo);
      shadow(ContainerJobInfo);
      setHidden(btnViewMore);
      setShow(btnViewLess);
    });

    //sự kiện ckick nút view less
    btnViewLess.addEventListener("click", () => {
      viewMoreOpening = false;
      setHidden(ContentJobInfo);
    });
    if (viewMoreOpening) {
      setHidden(btnViewMore);
    }
  });

  //sự kiện rê chuột ra khỏi phần tử
  element.addEventListener("mouseout", () => {
    unShadow(ContainerJobInfo);
    setHidden(btnViewMore);

    if (viewMoreOpening) {
      setHidden(btnViewMore);
      shadow(ContainerJobInfo);
    }
  });
});

// ----------
