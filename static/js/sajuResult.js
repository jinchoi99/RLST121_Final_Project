let data2000 = [];
let data2001 = [];
let data2002 = [];
let data2003 = [];
let data2004 = [];
function start(date, year) {
  console.log(year)
  if (year === "1997") {
    d3.csv('/static/data/1997.csv')
      .then((d) => {
        data1997 = d;
        fillResults1997(date)
      });
  }
  else if (year === "1998") {
    d3.csv('/static/data/1998.csv')
      .then((d) => {
        data1998 = d;
        fillResults1998(date)
      });
  }
  else if (year === "1999") {
    d3.csv('/static/data/1999.csv')
      .then((d) => {
        data1999 = d;
        fillResults1999(date)
      });
  }
  else if (year === "2000") {
    d3.csv('/static/data/2000.csv')
      .then((d2) => {
        data2000 = d2;
        fillResults2000(date)
      });
  }
  else if (year === "2001") {
    d3.csv('/static/data/2001.csv')
      .then((d2) => {
        data2001 = d2;
        fillResults2001(date)
      });
  }
  else if (year === "2002") {
    d3.csv('/static/data/2002.csv')
      .then((d) => {
        data2002 = d;
        fillResults2002(date)
      });
  }
  else if (year === "2003") {
    d3.csv('/static/data/2003.csv')
      .then((d) => {
        data2003 = d;
        fillResults2003(date)
      });
  }
  else if (year === "2004") {
    d3.csv('/static/data/2004.csv')
      .then((d) => {
        data2004 = d;
        fillResults2004(date)
      });
  }
  else if (year === "2004") {
    d3.csv('/static/data/2004.csv')
      .then((d) => {
        data2004 = d;
        fillResults2004(date)
      });
  }
}

const results = [];
function fillResults2000(date) {
  for (let i = 0; i < data2000.length; i += 1) {
    results.push(data2000[i][" "+date]);
  }
  document.getElementById("char1").innerHTML = results[0];
  document.getElementById("char2").innerHTML = results[1];
  document.getElementById("char3").innerHTML = results[2];
  document.getElementById("char4").innerHTML = results[3];
  document.getElementById("char5").innerHTML = results[4];
  document.getElementById("char6").innerHTML = results[5];
  document.getElementById("char7").innerHTML = results[6];
  document.getElementById("char8").innerHTML = results[7];
  $("#char1img").attr("src",results[8]);
  $("#char2img").attr("src",results[9]);
  $("#char3img").attr("src",results[10]);
  $("#char4img").attr("src",results[11]);
  $("#char5img").attr("src",results[12]);
  $("#char6img").attr("src",results[13]);
  $("#char7img").attr("src",results[14]);
  $("#char8img").attr("src",results[15]);
  document.getElementById("saju_exp").innerHTML = results[16];
}

function fillResults2001(date) {
  console.log(date)
  for (let i = 0; i < data2001.length; i += 1) {
    results.push(data2001[i][" "+date]);
  }
  document.getElementById("char1").innerHTML = results[0];
  document.getElementById("char2").innerHTML = results[1];
  document.getElementById("char3").innerHTML = results[2];
  document.getElementById("char4").innerHTML = results[3];
  document.getElementById("char5").innerHTML = results[4];
  document.getElementById("char6").innerHTML = results[5];
  document.getElementById("char7").innerHTML = results[6];
  document.getElementById("char8").innerHTML = results[7];
  $("#char1img").attr("src",results[8]);
  $("#char2img").attr("src",results[9]);
  $("#char3img").attr("src",results[10]);
  $("#char4img").attr("src",results[11]);
  $("#char5img").attr("src",results[12]);
  $("#char6img").attr("src",results[13]);
  $("#char7img").attr("src",results[14]);
  $("#char8img").attr("src",results[15]);
  document.getElementById("saju_exp").innerHTML = results[16];
}

function fillResults2002(date) {
  console.log(date)
  for (let i = 0; i < data2002.length; i += 1) {
    results.push(data2002[i][" "+date]);
  }
  document.getElementById("char1").innerHTML = results[0];
  document.getElementById("char2").innerHTML = results[1];
  document.getElementById("char3").innerHTML = results[2];
  document.getElementById("char4").innerHTML = results[3];
  document.getElementById("char5").innerHTML = results[4];
  document.getElementById("char6").innerHTML = results[5];
  document.getElementById("char7").innerHTML = results[6];
  document.getElementById("char8").innerHTML = results[7];
  $("#char1img").attr("src",results[8]);
  $("#char2img").attr("src",results[9]);
  $("#char3img").attr("src",results[10]);
  $("#char4img").attr("src",results[11]);
  $("#char5img").attr("src",results[12]);
  $("#char6img").attr("src",results[13]);
  $("#char7img").attr("src",results[14]);
  $("#char8img").attr("src",results[15]);
  document.getElementById("saju_exp").innerHTML = results[16];
}

function fillResults2003(date) {
  for (let i = 0; i < data2003.length; i += 1) {
    results.push(data2003[i][" "+date]);
  }
  document.getElementById("char1").innerHTML = results[0];
  document.getElementById("char2").innerHTML = results[1];
  document.getElementById("char3").innerHTML = results[2];
  document.getElementById("char4").innerHTML = results[3];
  document.getElementById("char5").innerHTML = results[4];
  document.getElementById("char6").innerHTML = results[5];
  document.getElementById("char7").innerHTML = results[6];
  document.getElementById("char8").innerHTML = results[7];
  $("#char1img").attr("src",results[8]);
  $("#char2img").attr("src",results[9]);
  $("#char3img").attr("src",results[10]);
  $("#char4img").attr("src",results[11]);
  $("#char5img").attr("src",results[12]);
  $("#char6img").attr("src",results[13]);
  $("#char7img").attr("src",results[14]);
  $("#char8img").attr("src",results[15]);
  document.getElementById("saju_exp").innerHTML = results[16];
}