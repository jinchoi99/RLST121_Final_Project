function start() {
  $(".start").hide();
  $(".sajuform").show();
  location.href = "#"
}

function fillYears() {
  let opts = ""
  for (let i = 1930; i < 1980; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  opts += `<option value="${1980}" selected="selected">${1980}</option>`;
  for (let i = 1981; i < 2022; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  document.getElementById("byear").innerHTML += opts;
}

function fillMonths() {
  let opts = ""
  for (let i = 1; i <=9; i++) {
    opts += `<option value="0${i}">${i}</option>`;
  }
  for (let i = 10; i <=12; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  document.getElementById("bmonth").innerHTML += opts;
}

function fillDays() {
  let opts = ""
  for (let i = 1; i <=9; i++) {
    opts += `<option value="0${i}">${i}</option>`;
  }
  for (let i = 10; i <=31; i++) {
    opts += `<option value="${i}">${i}</option>`;
  }
  document.getElementById("bday").innerHTML += opts;
}

fillYears();
fillMonths();
fillDays();