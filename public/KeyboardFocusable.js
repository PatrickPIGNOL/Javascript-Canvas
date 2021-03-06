import {GraphicComponent} from "./GraphicComponent.js";

export class KeyboardFocusable extends GraphicComponent
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super(pParent, pX, pY, pWidth, pHeight)
        this.aKeyboardFocusIndex = -1;
        this.aKeyboardFocusable = false;
        this.aKeyboardFocus = null;
        this.aKeyboardFocusDefault = false;
        this.mNextKeyboardFocus();
    }

    mNextKeyboardFocus()
    {
        if
        (
            this.aVisible
            &&
            this.aEnabled
            &&
            this.aKeyboardFocusable
        )
        {
            if(!this.aKeyboardFocus)
            if(this.aKeyboardFocusDefault)
            {
                return this.aKeyboardFocused = this;
            }
            else
            {
                for(let vIndex = 0; vIndex < this.Components.lenght; vIndex++)
                {
                    const vComponentFound = this.Components[vIndex];
                    if(this.aKeyboardFocus = vComponentFound.mNextKeyboardFocus())
                    {
                        return this.aKeyboardFocus;
                    }
                }
            }
        }
        else if
        (
            this.aVisible
            &&
            this.aEnabled
            &&
            this.aKeyboardFocusable
            &&
            this.aKeyboardFocused
        )
        {
            for(let vIndex = 0; vIndex < this.Components.lenght; vIndex++)
            {
                const vComponentFound = this.Components[vIndex];
                if(this.aKeyboardFocus = vComponentFound.mNextKeyboardFocus())
                {
                    return this.aKeyboardFocus;
                }
            }
            if(this.aKeyboardFocusable)
        }
    }
}

export default {KeyboardFocusable}