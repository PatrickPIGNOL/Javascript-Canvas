
import {EventProvider} from "./EventProvider.js";
class GraphicComponent
{
    constructor()
    {
		this.aEnabled = true;
        this.aGlobalAlpha = 1; 
        this.aVisible = true;
		this.aOnClickEventListeners = new Array();
        this.aOnDoubleClickEventListeners = new Array();
        this.aOnDragEventListeners = new Array();
        this.aOnDragMoveEventListeners = new Array();
        this.aOnDragDropEventListeners = new Array();
        this.aOnDrawEventListeners = new Array(); 
        this.aOnKeyDownEventListeners = new Array();
        this.aOnKeyUpEventListeners = new Array();
        this.aOnLoadEventListeners = new Array();
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
        this.aOnUnLoadEventListeners = new Array();
        this.aOnUpdateEventListeners = new Array(); 
        this.aOnResizeEventListeners = new Array();
        this.mAddOnAllEventListener(this);
    }

    get GlobalAlpha()
    {
        return this.aGlobalAlpha;
    }

    set GlobalAlpha(pGlobalAlpha)
    {
        this.aGlobalAlpha = pGlobalAlpha;
    }

    get Visible()
    {
        return this.aVisible;
    }

    set Visible(pVisible)
    {
        this.aVisible = pVisible
    }
}

export {GraphicComponent};
export default {GraphicComponent};