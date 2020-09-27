function reciever(request,sender, sendResponse){
document.body.textContent = ""
var text = []
for(var element of request.value){
var header = document.createElement("div")
header.textContent = "Nazwa: "+element.title+" Url: "+element.url+"\n"
text.push("Nazwa: "+element.title+" Url: "+element.url+"\n")
document.body.appendChild(header)
}
  var a1 = document.createElement("a")
  document.body.appendChild(a1)
  var a = document.getElementsByTagName("a")[0]
  var file = new Blob(text, {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = "file.txt";
  a.textContent = "download"
}
browser.runtime.onMessage.addListener(reciever)
