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

    mOnClickEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnDoubleClickEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;        
    }

    mOnKeyDownEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnKeyUpEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnMouseDownEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnMouseEnterEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }
    
    mOnMouseLeaveEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }
    
    mOnMouseMoveEventHandler(pEvent)
    {        
        pEvent.preventDefault();
        return false;
    }

    mOnMouseOutEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnMouseOverEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnMouseUpEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }
    
    mOnTouchCancelEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnTouchEndEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }
    
    mOnTouchLeaveEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnTouchMoveEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnTouchStartEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
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

    mOnClickEvent          (pEvent)
    { 
        this.aOnClickEventListeners.forEach
        (
            vOnClickEventListener=>
            {
                if(vOnClickEventListener)
                {
                    if(vOnClickEventListener === this)
                    {
                        vOnClickEventListener.mOnClickEventHandler(pEvent);
                    }
                    else
                    {
                        vOnClickEventListener.mOnClickEvent(pEvent);
                    }
                }
            }
        );
    }

    mOnDoubleClickEvent    (pEvent)
    { 
        this.aOnDoubleClickEventListeners.forEach
        (
            vOnDoubleClickEventListener=>
            {
                if(vOnDoubleClickEventListener)
                {
                    if(vOnDoubleClickEventListener === this)
                    {
                        vOnDoubleClickEventListener.mOnDoubleClickEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDoubleClickEventListener.mOnDoubleClickEvent(pEvent);
                    }
                }
            }
        );
    }
    
    mOnKeyDownEvent        (pEvent)
    { 
        this.aOnKeyDownEventListeners.forEach
        (
            vOnKeyDownEventListener=>
            {
                if(vOnKeyDownEventListener)
                {
                    if(vOnKeyDownEventListener === this)
                    {
                        vOnKeyDownEventListener.mOnKeyDownEventHandler(pEvent);
                    }
                    else
                    {
                        vOnKeyDownEventListener.mOnKeyDownEvent(pEvent);
                    }
                }
            }
        );
    }
    
    mOnKeyUpEvent          (pEvent)
    { 
        this.aOnKeyUpEventListeners.forEach
        (
            vOnKeyUpEventListener=>
            {
                if(vOnKeyUpEventListener)
                {
                    if(vOnKeyUpEventListener === this)
                    {
                        vOnKeyUpEventListener.mOnKeyUpEventHandler(pEvent);
                    }
                    else
                    {
                        vOnKeyUpEventListener.mOnKeyUpEvent(pEvent);
                    }
                }
            }
        );
    }
    
    mOnMouseDownEvent      (pEvent)
    { 
        this.aOnMouseDownEventListeners.forEach
        (
            vOnMouseDownEventListener=>
            {
                if(vOnMouseDownEventListener)
                {
                    if(vOnMouseDownEventListener === this)
                    {
                        vOnMouseDownEventListener.mOnMouseDownEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseDownEventListener.mOnMouseDownEvent(pEvent);
                    }
                }
            }
        );
    }
    
    mOnMouseEnterEvent     (pEvent)
    { 
        this.aOnMouseEnterEventListeners.forEach
        (
            vOnMouseEnterEventListener=>
            {
                if(vOnMouseEnterEventListener)
                {
                    if(vOnMouseEnterEventListener === this)
                    {
                        vOnMouseEnterEventListener.mOnMouseEnterEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseEnterEventListener.mOnMouseEnterEvent(pEvent);
                    }
                }
            }
        );
    }
    
    mOnMouseLeaveEvent     (pEvent)
    { 
        this.aOnMouseLeaveEventListeners.forEach
        (
            vOnMouseLeaveEventListener=>
            {
                if(vOnMouseLeaveEventListener)
                {
                    if(vOnMouseLeaveEventListener === this)
                    {
                        vOnMouseLeaveEventListener.mOnMouseLeaveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseLeaveEventListener.mOnMouseLeaveEvent(pEvent);                        
                    }
                }
            }
        );
    }
    
    mOnMouseMoveEvent      (pEvent)
    { 
        this.aOnMouseMoveEventListeners.forEach
        (
            vOnMouseMoveEventListener=>
            {
                if(vOnMouseMoveEventListener)
                {
                    if(vOnMouseMoveEventListener === this)
                    {
                        vOnMouseMoveEventListener.mOnMouseMoveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseMoveEventListener.mOnMouseMoveEvent(pEvent);
                    }
                }
            }
        );
    }

    mOnMouseOutEvent       (pEvent)
    { 
        this.aOnMouseOutEventListeners.forEach
        (
            vOnMouseOutEventListener=>
            {
                if(vOnMouseOutEventListener)
                {
                    if(vOnMouseOutEventListener === this)
                    {
                        vOnMouseOutEventListener.mOnMouseOutEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseOutEventListener.mOnMouseOutEvent(pEvent);
                    }
                }
            }
        );
    }

    mOnMouseOverEvent      (pEvent)
    { 
        this.aOnMouseOverEventListeners.forEach
        (
            vOnMouseOverEventListener=>
            {
                if(vOnMouseOverEventListener)
                {
                    if(vOnMouseOverEventListener === this)
                    {
                        vOnMouseOverEventListener.mOnMouseOverEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseOverEventListener.mOnMouseOverEvent(pEvent);
                    }
                }
            }
        );
    }

    mOnMouseUpEvent        (pEvent)
    { 
        this.aOnMouseUpEventListeners.forEach
        (
            vOnMouseUpEventListener=>
            {
                if(vOnMouseUpEventListener)
                {
                    if(vOnMouseUpEventListener === this)
                    {
                        vOnMouseUpEventListener.mOnMouseUpEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseUpEventListener.mOnMouseUpEvent(pEvent); 
                    }
                }
            }
        );
    }

    mOnTouchCancelEvent    (pEvent)
    { 
        this.aOnTouchCancelEventListeners.forEach
        (
            vOnTouchCancelEventListener=>
            {
                if(vOnTouchCancelEventListener)
                {
                    if(vOnTouchCancelEventListener === this)
                    {
                        vOnTouchCancelEventListener.mOnTouchCancelEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchCancelEventListener.mOnTouchCancelEvent(pEvent);                        
                    }
                }
            }
        );
    }

    mOnTouchEndEvent       (pEvent)
    { 
        this.aOnTouchEndEventListeners.forEach
        (
            vOnTouchEndEventListener=>
            {
                if(vOnTouchEndEventListener)
                {
                    if(vOnTouchEndEventListener === this)
                    {
                        vOnTouchEndEventListener.mOnTouchEndEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchEndEventListener.mOnTouchEndEvent(pEvent);
                    }
                }
            }
        );
    }

    mOnTouchLeaveEvent     (pEvent)
    { 
        this.aOnTouchLeaveEventListeners.forEach
        (
            vOnTouchLeaveEventListener=>
            {
                if(vOnTouchLeaveEventListener)
                {
                    if(vOnTouchLeaveEventListener === this)
                    {
                        vOnTouchLeaveEventListener.mOnTouchLeaveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchLeaveEventListener.mOnTouchLeaveEventHandler(pEvent);
                    }
                }
            }
        );
    }

    mOnTouchMoveEvent      (pEvent)
    { 
        this.aOnTouchMoveEventListeners.forEach
        (
            vOnTouchMoveEventListener=>
            {
                if(vOnTouchMoveEventListener)
                {
                    if(vOnTouchMoveEventListener === this)
                    {
                        vOnTouchMoveEventListener.mOnTouchMoveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchMoveEventListener.mOnTouchMoveEvent(pEvent);
                    }
                }
            }
        );
    }

    mOnTouchStartEvent     (pEvent)
    { 
        this.aOnTouchStartEventListeners.forEach
        (
            vOnTouchStartEventListener=>
            {
                if(vOnTouchStartEventListener)
                {
                    if(vOnTouchStartEventListener === this)
                    {
                        vOnTouchStartEventListener.mOnTouchStartEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchStartEventListener.mOnTouchStartEvent(pEvent);
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