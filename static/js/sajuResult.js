let data2000 = [];
function start(date) {
  d3.csv('/static/data/2000.csv')
    .then((data) => {
      data2000 = data;
      console.log(data2000)
      fillResults(date)
    });
}


const results = [];
function fillResults(date) {
  for (let i = 0; i < data2000.length; i += 1) {
    results.push(data2000[i][" "+date]);
  }

  // console.log(date)
  // console.log(results[16])
  
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