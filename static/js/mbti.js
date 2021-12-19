var currQ = 1;
var totQNum = 12;
let mbtiData = [];
const results = [];

var q = {
  1:{"prob":"문제1","pType":"EI","A":"E","B":"I"},
  2:{"prob":"문제2","pType":"SN","A":"S","B":"N"},
  3:{"prob":"문제3","pType":"TF","A":"T","B":"F"},
  4:{"prob":"문제4","pType":"JP","A":"J","B":"P"},
  5:{"prob":"문제5","pType":"EI","A":"E","B":"I"},
  6:{"prob":"문제6","pType":"SN","A":"S","B":"N"},
  7:{"prob":"문제7","pType":"TF","A":"T","B":"F"},
  8:{"prob":"문제8","pType":"JP","A":"J","B":"P"},
  9:{"prob":"문제9","pType":"EI","A":"E","B":"I"},
  10:{"prob":"문제10","pType":"SN","A":"S","B":"N"},
  11:{"prob":"문제11","pType":"TF","A":"T","B":"F"},
  12:{"prob":"문제12","pType":"JP","A":"J","B":"P"},
}

d3.csv('/static/data/mbti_data.csv')
  .then((data) => {
    mbtiData = data;
    // console.log(mbtiData)
  });

function start() {
  $(".start").hide();
  $(".question").show();
  next();
}
$("#A").click(function(){
  var pType = $("#pType").val();
  var preValue = $("#"+pType).val();
  console.log(parseInt(preValue)+1);
  $("#"+pType).val(parseInt(preValue)+1);
  next();
});
$("#B").click(function(){
    next();
});
function next(){
    if(currQ==13){
        $(".question").hide();
        $(".result").show();
        var mbti = "";
        ($("#EI").val()>=2) ? mbti += "E" : mbti += "I";
        ($("#SN").val()>=2) ? mbti += "S" : mbti += "N";
        ($("#TF").val()>=2) ? mbti += "T" : mbti += "F";
        ($("#JP").val()>=2) ? mbti += "J" : mbti += "P";
        // alert(mbti);
        for (let i = 0; i < mbtiData.length; i += 1) {
          results.push(mbtiData[i][mbti]);
        }
        $("#resultImg").attr("src",results[1]);
        $("#resultType").html(mbti + " / " + results[0]);
        $("#resultExplanation").html(results[2]);
        $("#strength1").html(results[3]);
        $("#strength2").html(results[4]);
        $("#strength3").html(results[5]);
        $("#strength4").html(results[6]);
        $("#strength5").html(results[7]);
        $("#weakness1").html(results[8]);
        $("#weakness2").html(results[9]);
        $("#weakness3").html(results[10]);
        $("#weakness4").html(results[11]);
        $("#weakness5").html(results[12]);
    }
    else{
        $(".progress-bar").attr('style','width: calc(100/' + totQNum + '*' + currQ + '%); background-color: rgb(174, 46, 46);');
        $("#prob").html(q[currQ]["prob"]);
        $("#pType").val(q[currQ]["pType"]);
        $("#A").html(q[currQ]["A"]);
        $("#B").html(q[currQ]["B"]);
        currQ++;
    }
}