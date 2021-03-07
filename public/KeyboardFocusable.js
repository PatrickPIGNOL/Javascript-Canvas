import {MouseFocusable} from "./MouseFocusable.js";
import {EKeyCodes} from "./EKeyCode.js"

export class KeyboardFocusable extends MouseFocusable
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super(pParent, pX, pY, pWidth, pHeight)
        this.aKeyboardFocusLoop = new Array();
        this.aKeyboardFocusIndex = -1;
        this.aKeyboardFocusable = false;
        this.mInit();
    }

    mInit()
    {
        for(let vIndex = 0; vIndex < this.Components.lenght; vIndex++)
        {
            const vComponentFound = this.Components[vIndex];
            if(vComponentFound.KeyboardFocusable)
            {
                if(this.aKeyboardFocusIndex < 0)
                {
                    this.aKeyboardFocusIndex = vIndex;
                }
                this.aKeyboardFocusLoop.push(this.Components[vIndex])
            }
        }
    }

    mOnKeyUpEventHandler(pEvent)
    {
        if(pEvent.code === EKeyCodes.Tab)
        {
            this.mNextKeyboardFocus(pEvent);
        }
    }

    mNextKeyboardFocus(pEvent)
    {
        if(pEvent.code === EKeyCodes.Tab)
		{

		}
    }
}

export default {KeyboardFocusable}