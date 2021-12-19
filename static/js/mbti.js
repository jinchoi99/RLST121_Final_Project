var currQ = 1;
var totQNum = 12;
let mbtiData = [];
const results = [];

var q = {
  1:{"prob":"When listening to music, what is more important?","pType":"SN","A":"Melody > Lyrics","B":"Melody < Lyrics"},
  2:{"prob":"When I am feeling down...","pType":"EI","A":"I try to go out and meet friends.","B":"I try to stay home and treat myself."},
  3:{"prob":"In group situations, (1) do you more often take on the role of caring for people and making sure they get along? Or (2) do you more often take on the role of making sure things get done even if you have to be a little direct?","pType":"TF","A":"(2)","B":"(1)"},
  4:{"prob":"In dealing with the outside world, do you prefer to get things decided or do you prefer to stay open to new information and options?","pType":"JP","A":"Get things decided","B":"Open to new options"},
  5:{"prob":"The reason I work hard is...","pType":"EI","A":"for the things that I will achieve after I finish the work.","B":"for the things that I will lose if I don't finish the work."},
  6:{"prob":"Do you prefer to focus on the basic information you take in or do you prefer to interpret and add meaning?","pType":"SN","A":"Take in as is","B":"Add meaning"},
  7:{"prob":"When making decisions, do you prefer to first look at logic and consistency or first look at the people and special circumstances?","pType":"TF","A":"Logic and Consistency","B":"People and Special Circumstances"},
  8:{"prob":"Only 24 hours left until your day trip with bae. You will most likely say...","pType":"JP","A":"I already made brunch/dinner reservations & know where we will go/what we will do","B":"Why prepare? The best things happen spontaneously. I know we will have so much fun."},
  9:{"prob":"When I meet someone new...","pType":"EI","A":"I don't like the awkwardness. I will start the conversation.","B":"I won't start a conversation unless the person initiates it."},
  10:{"prob":"If you have only 1 more day to live and you have $1,000,000,000, what would you do?","pType":"SN","A":"Spend everything right away for myself.","B":"Go to the bank, make a new account, prepare a document to pass on the money to someone else"},
  11:{"prob":"After years of hard work and saving money, your friend just announced \"Hey, I finally bought a car!\" The first thing you say is...","pType":"TF","A":"Which car did you get? How much was it?","B":"Wow! Congrats :D Your hard work finally paid off!"},
  12:{"prob":"When writing the RLST 121 final paper, I...","pType":"JP","A":"first do some research on my topic, gather data, make an outline, then start writing.","B":"first write something down, do research and fill in the gaps as I write."}
}

d3.csv('/static/data/mbti_data.csv')
  .then((data) => {
    mbtiData = data;
    // console.log(mbtiData)
  });

function start() {
  $(".start").hide();
  $(".question").show();
  location.href = "#"
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
    changeBGsize();
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

function changeBGsize() {
  var body = document.body,
    html = document.documentElement;
  var heightimg = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  $("#bgimageid").attr('style','height: '+ 1.5*heightimg +'px;');
}