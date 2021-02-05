
import {MouseFocusable} from "./MouseFocusable.js";
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
}

export {Scene};
export default {Scene};