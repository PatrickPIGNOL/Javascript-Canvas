import {SizeableComponent} from "./SizeableComponent.mjs";
import {Loader, EImage} from "./Loader.mjs";

const WindowState = Object.freeze
(
    {
        Opening: 
        {            
            FadeIn: 0
        },
        Opened: 1,
        Closing: 
        {
            FadeOut: 2,
        },
        Closed: 3
    }
);

class WindowBase extends SizeableComponent
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super(pParent, pX, pY, pWidth, pHeight);
        this.MouseFocusable = true;
        this.aState = WindowState.Opening.FadeIn;
        this.aTimer = 0;
        this.aBackGroundStyle = "rgba(80,127,255,1.0)"; 
    }

    get BackGroundStyle()
    {
        return this.aBackGroundStyle;
    }

    set BackGroundStyle(pBackGroundStyle)
    {
        this.aBackGroundStyle = pBackGroundStyle;
    }

    mOpen()
    {
        this.mOnLoadEvent();
        this.aState = WindowState.Opening.FadeIn;
        this.Visible = true;
    }

    mClose()
    {
        if(this.aState <= WindowState.Opened)
        {
            this.aState = WindowState.Closing.FadeOut;
            this.aTimer = 0;
        }
    }

    mOnLoadEventHandler()
    {
        this.aTimer = 0;
        this.aComponentsAlpha = 0;
    }

    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {
        this.aTimer += pDeltaTime;
        console.log("GameWindow mOnUpdateEventHandler")
        switch(this.aState)
        {
            case WindowState.Opened.FadeIn:
            {
                this.GlobalAlpha = this.aTimer / 3000;
                if(this.aTimer > 3000)
                {
                    this.aTimer = 0;
                    this.aState = WindowState.Opened;
                }
            }break;
            case WindowState.Opened:
            {

            }break;
            case WindowState.Closing.FadeOut:
            {
                this.GlobalAlpha = 1 - this.aTimer / 3000;
                if(this.aTimer > 3000)
                {
                    this.aTimer = 0;
                    this.aState = WindowState.Closed;
                    this.Visible = false;
                }
            }break
        }
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {
        if(this.Visible)
        {
            pGraphicContext.globalAlpha = this.GlobalAlpha;

            pGraphicContext.save();

            pGraphicContext.translate(this.AbsoluteX, this.AbsoluteY);
            pGraphicContext.fillStyle = this.aBackGroundStyle; 
            pGraphicContext.fillRect(0, 0, this.Width, this.Height);
            
            pGraphicContext.restore();

            //--------

            pGraphicContext.globalAlpha = 1;
        }
    }   

    mOnClickEventHandler(pClickEvent)
    {
        if(this.MouseFocus && this.MouseFocus !== this)
        {
            this.MouseFocus.mOnClickEvent(pClickEvent);
        }
    }

    mOnMouseMoveEventHandler(pMouseMoveEvent)
    {
        this.MouseFocus = this.mUpdateMouseFocus(pMouseMoveEvent);
        if(this.MouseFocus && this.MouseFocus !== this)
        {            
            this.MouseFocus.mOnMouseMoveEvent(pMouseMoveEvent);
        }
        this.aMouse = pMouseMoveEvent;
    }
}

export { WindowState };
export { WindowBase };
export default { WindowBase };