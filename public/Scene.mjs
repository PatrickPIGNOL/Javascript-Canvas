
import {MouseFocusable} from "./MouseFocusable.mjs";
class Scene extends MouseFocusable
{
    constructor()
    {
        super(null, 0, 0, 0, 0);
        this.Visible = true;
        this.MouseFocusable = true;
    }
    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {
        this.Width = pCanvas.width;
        this.Height = pCanvas.height;
    }
    mOnMouseMoveEventHandler(pOnMouseMoveEventHandler)
    {
        super.mOnMouseMoveEventHandler(pOnMouseMoveEventHandler);
        console.log("Scene mOnMouseMoveEventHandler")
    }
}

export {Scene};
export default {Scene};