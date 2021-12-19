function start() {
  $(".start").hide();
  $(".sajuform").show();
  location.href = "#"
}

function filldrop() {
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

filldrop();