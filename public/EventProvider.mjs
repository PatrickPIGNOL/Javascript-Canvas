class EventProvider
{
    constructor()
    {
        this.aOnClickEventListeners = new Array();
        this.aOnDoubleClickEventListeners = new Array();
        this.aOnKeyDownEventListeners = new Array();
        this.aOnKeyUpEventListeners = new Array();
        this.aOnMouseDownEventListeners = new Array();
        this.aOnMouseEnterEventListeners = new Array();
        this.aOnMouseLeaveEventListeners = new Array();
        this.aOnMouseMoveEventListeners = new Array();
        this.aOnMouseOutEventListeners = new Array();
        this.aOnMouseOverEventListeners = new Array();
        this.aOnMouseUpEventListeners = new Array();
        this.aOnTouchCancelEventListeners = new Array();
        this.aOnTouchEndEventListeners = new Array();
        this.aOnTouchLeaveEventListeners = new Array();
        this.aOnTouchMoveEventListeners = new Array();
        this.aOnTouchStartEventListeners = new Array(); 

        this.aOnLoadEventListeners = new Array();
        this.aOnUnLoadEventListeners = new Array();
        this.aOnUpdateEventListeners = new Array(); 
        this.aOnDrawEventListeners = new Array(); 
        this.aOnResizeEventListeners = new Array(); 

        this.mAddOnAllEventListener(this);
    }

    mOnClickEventHandler(pClickEvent)
    {

    }

    mOnDoubleClickEventHandler(pDoubleClickEvent)
    {
        
    }

    mOnKeyDownEventHandler(pKeyDownEvent)
    {
        
    }

    mOnKeyUpEventHandler(pKeyUpEvent)
    {
        
    }

    mOnMouseDownEventHandler(pMouseDownEvent)
    {
        
    }

    mOnMouseEnterEventHandler(pMouseEnterEvent)
    {
        
    }
    
    mOnMouseLeaveEventHandler(pMouseLeaveEvent)
    {
        
    }
    
    mOnMouseMoveEventHandler(pMouseMoveEvent)
    {
        
    }

    mOnMouseOutEventHandler(pMouseOutEvent)
    {
        
    }

    mOnMouseOverEventHandler(pMouseOverEvent)
    {
        
    }

    mOnMouseUpEventHandler(pMouseUpEvent)
    {
        
    }
    
    mOnTouchCancelEventHandler(pTouchCancelEvent)
    {
        
    }

    mOnTouchEndEventHandler(pTouchEndEvent)
    {
        
    }
    
    mOnTouchLeaveEventHandler(pTouchLeaveEvent)
    {
        
    }

    mOnTouchMoveEventHandler(pTouchMoveEvent)
    {
        
    }

    mOnTouchStartEventHandler(pTouchStartEvent)
    {
        
    }

    mOnLoadEventHandler()
    {

    }
    
    mOnUnLoadEventHandler()
    {
        
    }

    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {   
        
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {

    }

    mOnResizeEventHandler()
    {

    }

    mOnClickEvent          (pClickEvent)
    { 
        this.aOnClickEventListeners.forEach
        (
            vOnClickEventListener=>
            {
                if(vOnClickEventListener)
                {
                    if(vOnClickEventListener === this)
                    {
                        vOnClickEventListener.mOnClickEventHandler(pClickEvent);
                    }
                    else
                    {
                        vOnClickEventListener.mOnClickEvent(pClickEvent);
                    }
                }
            }
        );
    }

    mOnDoubleClickEvent    (pDoubleClickEvent)
    { 
        this.aOnDoubleClickEventListeners.forEach
        (
            vOnDoubleClickEventListener=>
            {
                if(vOnDoubleClickEventListener)
                {
                    if(vOnDoubleClickEventListener === this)
                    {
                        vOnDoubleClickEventListener.mOnDoubleClickEventHandler(pDoubleClickEvent);
                    }
                    else
                    {
                        vOnDoubleClickEventListener.mOnDoubleClickEvent(pDoubleClickEvent);
                    }
                }
            }
        );
    }
    
    mOnKeyDownEvent        (pKeyDownEvent)
    { 
        this.aOnKeyDownEventListeners.forEach
        (
            vOnKeyDownEventListener=>
            {
                if(vOnKeyDownEventListener)
                {
                    if(vOnKeyDownEventListener === this)
                    {
                        vOnKeyDownEventListener.mOnKeyDownEventHandler(pKeyDownEvent);
                    }
                    else
                    {
                        vOnKeyDownEventListener.mOnKeyDownEvent(pKeyDownEvent);
                    }
                }
            }
        );
    }
    
    mOnKeyUpEvent          (pKeyUpEvent)
    { 
        this.aOnKeyUpEventListeners.forEach
        (
            vOnKeyUpEventListener=>
            {
                if(vOnKeyUpEventListener)
                {
                    if(vOnKeyUpEventListener === this)
                    {
                        vOnKeyUpEventListener.mOnKeyUpEventHandler(pKeyUpEvent);
                    }
                    else
                    {
                        vOnKeyUpEventListener.mOnKeyUpEvent(pKeyUpEvent);
                    }
                }
            }
        );
    }
    
    mOnMouseDownEvent      (pMouseDownEvent)
    { 
        this.aOnMouseDownEventListeners.forEach
        (
            vOnMouseDownEventListener=>
            {
                if(vOnMouseDownEventListener)
                {
                    if(vOnMouseDownEventListener === this)
                    {
                        vOnMouseDownEventListener.mOnMouseDownEventHandler(pMouseDownEvent);
                    }
                    else
                    {
                        vOnMouseDownEventListener.mOnMouseDownEvent(pMouseDownEvent);
                    }
                }
            }
        );
    }
    
    mOnMouseEnterEvent     (pMouseEnterEvent)
    { 
        this.aOnMouseEnterEventListeners.forEach
        (
            vOnMouseEnterEventListener=>
            {
                if(vOnMouseEnterEventListener)
                {
                    if(vOnMouseEnterEventListener === this)
                    {
                        vOnMouseEnterEventListener.mOnMouseEnterEventHandler(pMouseEnterEvent);
                    }
                    else
                    {
                        vOnMouseEnterEventListener.mOnMouseEnterEvent(pMouseEnterEvent);
                    }
                }
            }
        );
    }
    
    mOnMouseLeaveEvent     (pMouseLeaveEvent)
    { 
        this.aOnMouseLeaveEventListeners.forEach
        (
            vOnMouseLeaveEventListener=>
            {
                if(vOnMouseLeaveEventListener)
                {
                    if(vOnMouseLeaveEventListener === this)
                    {
                        vOnMouseLeaveEventListener.mOnMouseLeaveEventHandler(pMouseLeaveEvent);
                    }
                    else
                    {
                        vOnMouseLeaveEventListener.mOnMouseLeaveEvent(pMouseLeaveEvent);                        
                    }
                }
            }
        );
    }
    
    mOnMouseMoveEvent      (pMouseMoveEvent)
    { 
        this.aOnMouseMoveEventListeners.forEach
        (
            vOnMouseMoveEventListener=>
            {
                if(vOnMouseMoveEventListener)
                {
                    if(vOnMouseMoveEventListener === this)
                    {
                        vOnMouseMoveEventListener.mOnMouseMoveEventHandler(pMouseMoveEvent);
                    }
                    else
                    {
                        vOnMouseMoveEventListener.mOnMouseMoveEvent(pMouseMoveEvent);
                    }
                }
            }
        );
    }

    mOnMouseOutEvent       (pMouseOutEvent)
    { 
        this.aOnMouseOutEventListeners.forEach
        (
            vOnMouseOutEventListener=>
            {
                if(vOnMouseOutEventListener)
                {
                    if(vOnMouseOutEventListener === this)
                    {
                        vOnMouseOutEventListener.mOnMouseOutEventHandler(pMouseOutEvent);
                    }
                    else
                    {
                        vOnMouseOutEventListener.mOnMouseOutEvent(pMouseOutEvent);
                    }
                }
            }
        );
    }

    mOnMouseOverEvent      (pMouseOverEvent)
    { 
        this.aOnMouseOverEventListeners.forEach
        (
            vOnMouseOverEventListener=>
            {
                if(vOnMouseOverEventListener)
                {
                    if(vOnMouseOverEventListener === this)
                    {
                        vOnMouseOverEventListener.mOnMouseOverEventHandler(pMouseOverEvent);
                    }
                    else
                    {
                        vOnMouseOverEventListener.mOnMouseOverEvent(pMouseOverEvent);
                    }
                }
            }
        );
    }

    mOnMouseUpEvent        (pMouseUpEvent)
    { 
        this.aOnMouseUpEventListeners.forEach
        (
            vOnMouseUpEventListener=>
            {
                if(vOnMouseUpEventListener)
                {
                    if(vOnMouseUpEventListener === this)
                    {
                        vOnMouseUpEventListener.mOnMouseUpEventHandler(pMouseUpEvent);
                    }
                    else
                    {
                        vOnMouseUpEventListener.mOnMouseUpEvent(pMouseUpEvent); 
                    }
                }
            }
        );
    }

    mOnTouchCancelEvent    (pTouchCancelEvent)
    { 
        this.aOnTouchCancelEventListeners.forEach
        (
            vOnTouchCancelEventListener=>
            {
                if(vOnTouchCancelEventListener)
                {
                    if(vOnTouchCancelEventListener === this)
                    {
                        vOnTouchCancelEventListener.mOnTouchCancelEventHandler(pTouchCancelEvent);
                    }
                    else
                    {
                        vOnTouchCancelEventListener.mOnTouchCancelEvent(pTouchCancelEvent);                        
                    }
                }
            }
        );
    }

    mOnTouchEndEvent       (pTouchEndEvent)
    { 
        this.aOnTouchEndEventListeners.forEach
        (
            vOnTouchEndEventListener=>
            {
                if(vOnTouchEndEventListener)
                {
                    if(vOnTouchEndEventListener === this)
                    {
                        vOnTouchEndEventListener.mOnTouchEndEventHandler(pTouchEndEvent);
                    }
                    else
                    {
                        vOnTouchEndEventListener.mOnTouchEndEvent(pTouchEndEvent);
                    }
                }
            }
        );
    }

    mOnTouchLeaveEvent     (pTouchLeaveEvent)
    { 
        this.aOnTouchLeaveEventListeners.forEach
        (
            vOnTouchLeaveEventListener=>
            {
                if(vOnTouchLeaveEventListener)
                {
                    if(vOnTouchLeaveEventListener === this)
                    {
                        vOnTouchLeaveEventListener.mOnTouchLeaveEventHandler(pTouchLeaveEvent);
                    }
                    else
                    {
                        vOnTouchLeaveEventListener.mOnTouchLeaveEventHandler(pTouchLeaveEvent);
                    }
                }
            }
        );
    }

    mOnTouchMoveEvent      (pTouchMoveEvent)
    { 
        this.aOnTouchMoveEventListeners.forEach
        (
            vOnTouchMoveEventListener=>
            {
                if(vOnTouchMoveEventListener)
                {
                    if(vOnTouchMoveEventListener === this)
                    {
                        vOnTouchMoveEventListener.mOnTouchMoveEventHandler(pTouchMoveEvent);
                    }
                    else
                    {
                        vOnTouchMoveEventListener.mOnTouchMoveEvent(pTouchMoveEvent);
                    }
                }
            }
        );
    }

    mOnTouchStartEvent     (pTouchStartEvent)
    { 
        this.aOnTouchStartEventListeners.forEach
        (
            vOnTouchStartEventListener=>
            {
                if(vOnTouchStartEventListener)
                {
                    if(vOnTouchStartEventListener === this)
                    {
                        vOnTouchStartEventListener.mOnTouchStartEventHandler(pTouchStartEvent);
                    }
                    else
                    {
                        vOnTouchStartEventListener.mOnTouchStartEvent(pTouchStartEvent);
                    }
                }
            }
        );
    }

    mOnLoadEvent          ()
    { 
        this.aOnLoadEventListeners.forEach
        (
            vOnLoadEventListener=>
            {
                if(vOnLoadEventListener)
                {
                    if(vOnLoadEventListener === this)
                    {
                        vOnLoadEventListener.mOnLoadEventHandler();
                    }
                    else
                    {
                        vOnLoadEventListener.mOnLoadEvent();                        
                    }
                }
            }
        );
    }

    mOnUnLoadEvent          ()
    {
        this.aOnUnLoadEventListeners.forEach
        (
            vOnUnLoadEventListener=>
            {
                if(vOnUnLoadEventListener)
                {
                    if(vOnUnLoadEventListener === this)
                    {
                        vOnUnLoadEventListener.mOnUnLoadEventHandler();
                    }
                    else
                    {
                        vOnUnLoadEventListener.mOnUnLoadEvent();
                    }
                }
            }
        );
    }

    mOnUpdateEvent(pCanvas, pDeltaTime)
    {
        this.aOnUpdateEventListeners.forEach
        (
            vOnUpdateEventListener=>
            {
                if(vOnUpdateEventListener)
                {
                    if(vOnUpdateEventListener === this)
                    {
                        vOnUpdateEventListener.mOnUpdateEventHandler(pCanvas, pDeltaTime);
                    }
                    else
                    {
                        vOnUpdateEventListener.mOnUpdateEvent(pCanvas, pDeltaTime);
                    }
                }
            }
        );
    }

    mOnDrawEvent(pCanvas, pGraphicContext)
    {
        this.aOnDrawEventListeners.forEach
        (
            vOnDrawEventListener=>
            {
                if(vOnDrawEventListener)
                {
                    if(vOnDrawEventListener === this)
                    {
                        vOnDrawEventListener.mOnDrawEventHandler(pCanvas, pGraphicContext);
                    }
                    else
                    {
                        vOnDrawEventListener.mOnDrawEvent(pCanvas, pGraphicContext);
                    }
                }
            }
        );
    }

    mOnResizeEvent(pCanvas)
    {
        this.aOnResizeEventListeners.forEach
        (
            vOnResizeEventListener=>
            {
                if(vOnResizeEventListener)
                {
                    if(vOnResizeEventListener === this)
                    {
                        vOnResizeEventListener.mOnResizeEventHandler(pCanvas);    
                    }
                    else
                    {
                        vOnResizeEventListener.mOnResizeEvent(pCanvas);
                    }
                }
            }
        );
    }

    mAddOnAllEventListener(pEventListener)
    {
        if(pEventListener)
        {
            this.mAddOnClickEventListener       (pEventListener);
            this.mAddOnDoubleClickEventListener (pEventListener);
            this.mAddOnKeyDownEventListener     (pEventListener);
            this.mAddOnKeyUpEventListener       (pEventListener);
            this.mAddOnMouseDownEventListener   (pEventListener);
            this.mAddOnMouseEnterEventListener  (pEventListener);
            this.mAddOnMouseLeaveEventListener  (pEventListener);
            this.mAddOnMouseMoveEventListener   (pEventListener);
            this.mAddOnMouseOutEventListener    (pEventListener);
            this.mAddOnMouseOverEventListener   (pEventListener);
            this.mAddOnMouseUpEventListener     (pEventListener);
            this.mAddOnTouchCancelEventListener (pEventListener);
            this.mAddOnTouchEndEventListener    (pEventListener);
            this.mAddOnTouchLeaveEventListener  (pEventListener);
            this.mAddOnTouchMoveEventListener   (pEventListener);
            this.mAddOnTouchStartEventListener  (pEventListener);
            this.mAddOnLoadEventListener        (pEventListener);
            this.mAddOnUnLoadEventListener      (pEventListener);
            this.mAddOnUpdateEventListener      (pEventListener);
            this.mAddOnDrawEventListener        (pEventListener);
            this.mAddOnResizeEventListener      (pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnClickEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnClickEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnDoubleClickEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnDoubleClickEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnKeyDownEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnKeyDownEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnKeyUpEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnKeyUpEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseDownEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseDownEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseEnterEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseEnterEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseLeaveEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseLeaveEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseMoveEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseMoveEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseOutEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseOutEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseOverEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseOverEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnMouseUpEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnMouseUpEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnTouchCancelEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnTouchCancelEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnTouchEndEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnTouchEndEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnTouchLeaveEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnTouchLeaveEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnTouchMoveEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnTouchMoveEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnTouchStartEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnTouchStartEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }
    
    mAddOnLoadEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnLoadEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }
    
    mAddOnUnLoadEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnUnLoadEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnUpdateEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnUpdateEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnDrawEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnDrawEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

    mAddOnResizeEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnResizeEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }
}

export {EventProvider};
export default {EventProvider};