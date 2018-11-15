
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"img { width: 100%; }\n",],undefined,{path:"./pages/home/home.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/home/home.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      