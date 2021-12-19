window.onload = function() {
  var body = document.body,
    html = document.documentElement;
  var heightimg = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  document.getElementById("bgimageid").style.height = `${heightimg}px`;
};
