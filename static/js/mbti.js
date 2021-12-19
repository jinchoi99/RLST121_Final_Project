var currQ = 1;
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
var totQNum = Object.keys(q).length;
let mbtiData = [];
const results = [];
d3.csv('mbti.csv')
    .then((data) => {
        mbtiData = data;
    console.log(mbtiData)});
function start() {
    $(".start").hide();
    $(".question").show();
    next();
}
$("#A").click(function(){
    var pType = $("#pType").val();
    var preValue = $("#"+pType).val();
    // console.log(parseInt(preValue)+1);
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
        console.log(results);
        $("#animalImg").attr("src",results[1]);
        $("#animalName").html(results[2]);
        $("#explanation").html(mbti + ": " + results[0]);
    }
    else{
        $(".progress-bar").attr('style','width: calc(100/+' + totQNum + '*' + currQ + '%)');
        $("#prob").html(q[currQ]["prob"]);
        $("#pType").val(q[currQ]["pType"]);
        $("#A").html(q[currQ]["A"]);
        $("#B").html(q[currQ]["B"]);
        currQ++;
    }
}