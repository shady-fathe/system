/*
عايز داله تربط زرار تغير 
التارجت بي الارقام مع القيمه 
 اقدر اعدل الرقم الخاص بالتارجت
 و ف نفس الوقت القيمه الي ف الدايره تظهر 
*/
let MainTargetNumber = document.getElementById("TargetNumber");
let ProssesTargetNumber = document.getElementById("Prosses-Target-Number");
let targetpercint = document.querySelector(".target-percint");
let popuptarget = document.querySelector(".popup-target");
let popupTargetinput = document.querySelector(".popup-target input");
let BtnPopupNumber = document.querySelectorAll(".popup-number");
let PopupBtnDelete = document.querySelector(".popup-btn-delete");
let PopupBtnDeleteAll = document.querySelector(".popup-btn-delete-all");
let btnSetTarget = document.querySelector(".btn-Set-Target");
let MainTarget;
let percint;
let ProssesTarget = 100;

if (popupTargetinput.value === "") {
  MainTarget = 0;
}
// Target functions
// Function Remove popup
function popupExit() {
  popuptarget.style.opacity = 0;
  popuptarget.style.pointerEvents = "none";
}
// Function To Change the Target

function openPopupTarget() {
  popuptarget.style.opacity = 1;
  popuptarget.style.pointerEvents = "auto";
  popupTargetinput.setAttribute("placeholder", "Type Valid number");
}
// add Numbers and Delete in popup target
function addDeleteNm() {
  BtnPopupNumber.forEach((e) => {
    e.addEventListener("click", () => {
      popupTargetinput.value += e.value;
    });
  });
  PopupBtnDelete.onclick = () => {
    if (popupTargetinput.value > 0) {
      popupTargetinput.value -= 1;
    } else if (popupTargetinput.value == 0) {
      popupTargetinput.value = "";
    }
  };
  PopupBtnDeleteAll.onclick = () => {
    popupTargetinput.value = "";
  };
  btnSetTarget.onclick = () => {
    if (popupTargetinput.value === "") {
      popupTargetinput.setAttribute("placeholder", "not valid number");
    } else {
      MainTarget = popupTargetinput.value;
      popupTargetinput.value = "";
      popupTargetinput.setAttribute("placeholder", "done");
      popupTargetinput.style.textAlign = "center";
      JSON.stringify(localStorage.setItem("Target", MainTarget));
      TargetValus();
      popupExit();
    }
  };
}

function TargetValus() {
  if (JSON.parse(localStorage.getItem("Target") === null)) {
    JSON.stringify(localStorage.setItem("Target", 0));
  } else {
    MainTarget = JSON.parse(localStorage.getItem("Target"));
  }
  percint = Math.floor((ProssesTarget / MainTarget) * 100);
  if (MainTarget === 0 && ProssesTarget === 0) {
    percint = 0;
  } else if (ProssesTarget >= 0 && MainTarget <= 0) {
    percint = "0";
  } else if (MainTarget === "") {
    MainTarget = 0;
  }
  MainTargetNumber.textContent = "$" + MainTarget;
  ProssesTargetNumber.textContent = "$" + ProssesTarget;
  targetpercint.textContent = percint + "%";
}
  
addDeleteNm();
TargetValus();
