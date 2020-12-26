let Mouse = null;
let Clicked = false;
class Game
{
    constructor(pBrowser, pCanvas)
    {
        console.log("CONSTRUCTOR !!!");
        this.aBrowser = pBrowser;
        this.aCanvas = pCanvas;
        this.aClicked = false;
        this.aMouse = null;
        this.aCanvas.addEventListener
        (
            "click",
            pClickEvent =>
            {
                this.mOnClick(pClickEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            'dblclick',
            pDoubleClickEvent => 
            {
                this.mOnDoubleClick(pDoubleClickEvent);
            }
        );
        this.aCanvas.onmouseenter = this.mOnMouseEnter;
        this.aCanvas.onmouseleave = this.mOnMouseLeave;
        this.aCanvas.onmousemove = this.mOnMouseMove;
        this.aCanvas.onmouseover = this.mOnMouseOver;
        this.aCanvas.onmousedown = this.mOnMouseDown;
        this.aCanvas.addEventListener
        (
            "mousedown",
            pMouseDownEvent =>
            {
                this.mOnMouseDown(pMouseDownEvent)
            }
        );
        this.aCanvas.onmouseup = this.mOnMouseUp;
        this.aCanvas.style.margin = 0;
        this.aCanvas.style.padding = 0;       
        this.aContext = this.aCanvas.getContext('2d');
        this.aOldTime = performance.now();
        this.aPause = false;
        this.aLoopTimeOut = -1;
        console.log("ENDCONSTRUCTOR !!!");
    }

    mLoad()
    {
        console.log("LOAD !!!");
        
        console.log("ENDLOAD !!!");
    }

    mStart()
    {
        this.mLoad();        
    }

    mUpdate(pDeltaTime)
    {
        console.log("UPDATE !!!");
        if
        (
            (this.aBrowser & Browsers.Chromium)
            ||
            (this.aBrowser & Browsers.Chrome)
        )
        {
            //chrome & chromium expands width and height 1 px too far off the screen
            this.aCanvas.width = window.innerWidth - 1;
            this.aCanvas.height = window.innerHeight - 1;
        }
        else
        {
            this.aCanvas.width = window.innerWidth;
            this.aCanvas.height = window.innerHeight;
        }
        this.aMouse = Mouse;
        this.aClicked = Clicked;
        console.log("ENDUPDATE !!!");
    }
    
    mDraw(pGraphicContext)
    {
        console.log("DRAW !!!");
        if(pGraphicContext)
        {
            pGraphicContext.fillStyle = 'rgba(255, 0, 0, 1)';
            pGraphicContext.fillRect(0, 0, this.aCanvas.width, this.aCanvas.height);
            pGraphicContext.fillStyle = 'rgba(0, 100, 0, 1)';
            pGraphicContext.fillRect(1, 1, this.aCanvas.width-2, this.aCanvas.height-2);
            pGraphicContext.fillStyle = 'rgba(200, 0, 0, 0.4)';
            pGraphicContext.fillRect(10, 10, this.aMouse.clientX + 50, this.aMouse.clientY + 50);
            pGraphicContext.fillStyle = 'rgba(0, 0, 200, 0.4)';
            pGraphicContext.fillRect(this.aMouse.clientX - 60, this.aMouse.clientY - 60, this.aCanvas.width +50- this.aMouse.clientX, this.aCanvas.height +50- this.aMouse.clientY);

            if(this.aClicked)
            {
                pGraphicContext.fillStyle = 'rgba(0, 255, 0, 0.6)';
            }
            else
            {
                pGraphicContext.fillStyle = 'rgba(0, 0, 255, 0.6)';
            }
            
            pGraphicContext.fillRect(this.aMouse.clientX - 50, this.aMouse.clientY - 50, 100, 100);
        }
        else
        {
            document.write("Canvas are not supported");
        }
        console.log("ENDDRAW !!!");
    }
    
    mLoop()
    {
        console.log("LOOP !!!");
        const vNewTime = performance.now();
        const vDeltaTime = vNewTime - this.aOldTime;
        this.aOldTime = vNewTime;
        this.mUpdate(vDeltaTime);
        this.mDraw(this.aCanvas.getContext('2d'));
        console.log("ENDLOOP !!!");
    }
    
    mPause()
    {
        this.aPause = !this.aPause;
    }
    
    get Pause()
    {
        return this.aPause;
    }

    mOnDoubleClick(pDoubleClickEvent)
    {

    }

    mOnMouseEnter(pMouse)
    {
        console.log("MOUSEENTER !!!");
        console.log("ENDMOUSEENTER !!!");
    }

    mOnMouseLeave(pMouse)
    {
        console.log("MOUSELEAVE !!!");
        console.log("ENDMOUSELEAVE !!!");
    }
    
    mOnMouseMove(pMouse)
    {
        console.log("MOUSEMOVED !!!");
        Mouse = pMouse;
        console.log("ENDMOUSEMOVED !!!");
    }

    mOnMouseOver()
    {
        console.log("MOUSEOVER !!!");
        console.log("ENDMOUSEOVER !!!");
    }

    mOnMouseDown(pMouseDownEvent)
    {
        console.log("MOUSEDOWN !!!");
        console.log("ENDMOUSEDOWN !!!");
    }

    mOnMouseUp()
    {
        console.log("MOUSEUP !!!");
        console.log("ENDMOUSEUP !!!");
    }

    mOnClick(pClickEvent)
    {
        console.log("CLICKED !!!");
        Clicked = !Clicked;
        console.log("ENDCLICKED !!!");
    }
    
    mOnResize()
    {
        this.mUpdate(0);
        this.mDraw(this.aCanvas.getContext('2d'));
    }
    
    get Canvas()
    {
        return this.aCanvas;
    }
    get LoopTimeOut()
    {
        return this.aLoopTimeOut;
    }
    set LoopTimeOut(pLoopTimeout)
    {
        this.aLoopTimeOut = pLoopTimeout;
    }
}