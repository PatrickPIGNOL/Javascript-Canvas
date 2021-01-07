import {GraphicComponent} from "./GraphicComponent.mjs";
import {Loader, EImage} from "./Loader.mjs";

class Mouse extends GraphicComponent
{
    static aInstance = null;
    static get Instance()
    {
        if(Mouse.aInstance === null)
        {
            Mouse.aInstance = new Mouse();
        }
        return Mouse.aInstance;
    }

    constructor()
    {
        super();
        this.aMouse = null;
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {
        if(this.aMouse)
        {
            pGraphicContext.drawImage(Loader.Images[EImage.Mouse.Index], this.aMouse.clientX, this.aMouse.clientY);
        }
    }

    mOnMouseMoveEventHandler(pMouseMoveEvent)
    {
        this.aMouse = pMouseMoveEvent;
    }
}
export {Mouse};
export default {Mouse};