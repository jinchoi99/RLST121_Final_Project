function start() {
  $(".start").hide();
  $(".sajuform").show();
  location.href = "#"
}

function fillYears() {
  let opts = ""
  for (let i = 1930; i < 1990; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  opts += `<option value="${1990}" selected="selected">${1990}</option>`;
  for (let i = 1991; i < 2022; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  document.getElementById("byear").innerHTML += opts;
}

function fillMonths() {
  let opts = ""
  for (let i = 1; i <=9; i++) {
    opts += `<option value="0${i}">${i}</option>`;
  }
  for (let i = 10; i <12; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  opts += `<option value="12" selected>12</option>`;
  document.getElementById("bmonth").innerHTML += opts;
}

function fillDays() {
  let opts = ""
  for (let i = 1; i <=9; i++) {
    opts += `<option value="0${i}">${i}</option>`;
  }
  for (let i = 10; i <=30; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  opts += `<option value="31" selected>31</option>`;
  document.getElementById("bday").innerHTML += opts;
}

fillYears();
fillMonths();
fillDays();