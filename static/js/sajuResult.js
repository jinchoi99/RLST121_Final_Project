let sData = [];
d3.csv('/static/data/2000.csv')
  .then((data) => {
    sData = data;
    console.log(sData)
  });

const results = [];
function fillResults(date) {
  // for (let i = 0; i < sData.length; i += 1) {
  //   results.push(sData[i][0]);
  // }
  alert("date")
}