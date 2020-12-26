function mLoadJavascriptFile(pFile, pCallback)
{
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pFile;
    if(pCallback)
    {
        js.onreadystatechange = pCallback;
        js.onload = pCallback;
    }
    document.body.appendChild(js);//js);
}

const Browsers = 
{
    None: 0,
    Opera: 1,
    Firefox: 2,
    Safari: 4,
    IE: 8,
    Edge: 16,
    Chrome: 32,
    Chromium: 64,
    Blink: 128
};

function mBrowser()
{    
    let vBrowser = 0;
    if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
    {
        vBrowser += Browsers.Opera;
    }
    if(typeof InstallTrigger !== 'undefined')
    {
        vBrowser += Browsers.Firefox;
    }
    if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification)))
    {
        vBrowser += Browsers.Safari;
    }
    if(/*@cc_on!@*/false || !!document.documentMode)
    {
        vBrowser += Browsers.IE;
    }
    if(! (vBrowser & Browsers.IE) && !!window.StyleMedia)
    {
        vBrowser += Browsers.Edge;
    }
    if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime))
    {
        vBrowser += Browsers.Chrome;
    }
    if((vBrowser & Browsers.Chrome) && (navigator.userAgent.indexOf("Edg") != -1))
    {
        vBrowser += Browsers.Chromium;
    }
    if((vBrowser & Browsers.Chrome) || (vBrowser & Browsers.Opera) && !!window.CSS)
    {
        vBrowser += Browsers.Blink;
    }
    return vBrowser;
}

let vMyGame;
let vBrowser = mBrowser();

window.onload = OnWindowLoad;

function OnWindowLoad()
{
    mLoadJavascriptFile("Game.js", mUseLoadedFiles);
    const vHTML = document.getElementById("html");
    vHTML.style.margin = 0;
    vHTML.style.padding = 0;  
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.overflow = 'hidden';
}

function mUseLoadedFiles()
{
    const vCanvas = document.getElementById("canvas");
    vCanvas.style.margin = 0;
    vCanvas.style.padding = 0;
    vMyGame = new Game(vBrowser, vCanvas);
    vMyGame.mStart();
    vMyGame.LoopTimeOut = window.setInterval(mGameLoop, 32);
    window.onresize = mGameResize;
}

function mGameLoop()
{
    vMyGame.mLoop()
}

function mGameResize()
{
    vMyGame.mOnResize();
}



