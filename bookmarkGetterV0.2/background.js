var currentTab;
var currentBookmark;

function updateIcon() {
  browser.browserAction.setIcon({
    path: {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
  browser.browserAction.setTitle({
    title: 'Get All Bookmarks'
  });
}

function getBookmarks() {
    browser.bookmarks.getTree().then((value)=>{
    var children = [...value[0].children]
       for(var child of children){
        if(child.type == 'folder'){
            for(var element of child.children){
            children.push(element)
            console.log(element.title+"   "+element.url)
            }
        }
       }
       browser.tabs.executeScript({"file" : "script.js"}).then((result)=>{
       browser.tabs.query({"active": true, "currentWindow":true}).then((tabs)=>{
       browser.tabs.sendMessage(tabs[0].id,{"value" : children })
       })
       })
       }
       )
}

browser.browserAction.onClicked.addListener(getBookmarks);

