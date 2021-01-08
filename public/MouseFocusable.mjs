import {GraphicComponent} from "./GraphicComponent.mjs";

class MouseFocusable extends GraphicComponent
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super();
        this.aComponents = new Array();
        this.aParent = pParent;
        if(this.aParent)
        {
            this.aParent.mAddComponent(this);
        }
        this.aX = pX;
        this.aY = pY;
        this.aWidth = pWidth;
        this.aHeight = pHeight;
        this.aMouseFocusable = false;     
    }

    get Components()
    {
        return this.aComponents;
    }
    
    mAddComponent(pComponent)
    {
        this.aComponents.push(pComponent);
        pComponent.mOnLoadEvent();
    }

    get Parent()
    {
        return this.aParent;
    }

    get AbsoluteX()
    {
        let vX = this.X;
        let vComponent = this;
        while(vComponent.Parent)
        {
            vComponent = vComponent.Parent;
            vX += vComponent.X;
        }
        return vX;
    }

    get AbsoluteY()
    {
        let vY = this.Y;
        let vComponent = this;
        while(vComponent.Parent)
        {
            vComponent = vComponent.Parent;
            vY += vComponent.Y;
        }
        return vY;
    }

    get X()
    {
        return this.aX;
    }

    set X(pX)
    {
        this.aX = pX;
    }

    get Y()
    {
        return this.aY;
    }

    set Y(pY)
    {
        this.aY = pY;
    }

    get Width()
    {
        return this.aWidth;
    }

    set Width(pWidth)
    {
        this.aWidth = pWidth;
    }

    get Height()
    {
        return this.aHeight;
    }

    set Height(pHeight)
    {
        this.aHeight = pHeight;
    }    

    get MouseFocus()
    {
        return this.aMouseFocus;
    }
    
    get MouseFocusable()
    {
        return this.aMouseFocusable;
    }

    set MouseFocusable(pMouseFocusable)
    {
        this.aMouseFocusable = pMouseFocusable;
    }

    mOnClickEventHandler(pEvent)
    {
        super.mOnClickEventHandler(pEvent);
        if(this.MouseFocus && (this.MouseFocus !== this))
        {
            this.aMouseFocus.mOnClickEvent(pEvent);
        }
    }

    mOnMouseMoveEventHandler(pEvent)
    {
        super.mOnMouseMoveEventHandler(pEvent);
        this.aMouseFocus = this.mUpdateMouseFocus(pEvent);
        if(this.MouseFocus && (this.MouseFocus !== this))
        {
            this.MouseFocus.mOnMouseMoveEvent(pEvent);
        }
    }

    mUpdateMouseFocus(pMouse)
    {
        this.aMouseFocus = null;
        if
        (
            this.Visible
            &&
            (pMouse.clientX >= this.AbsoluteX)
            &&
            (pMouse.clientX <= this.AbsoluteX + this.Width)
            &&
            (pMouse.clientY >= this.AbsoluteY)
            &&
            (pMouse.clientY <= this.AbsoluteY + this.Height)
        )
        {
            for(let vIndex = 0; vIndex < this.aComponents.length; vIndex++)
            {
                const vComponentFound = this.aComponents[vIndex];
                if(this.aMouseFocus = vComponentFound.mUpdateMouseFocus(pMouse))
                {
                    return this.aMouseFocus;
                }
            }
            if(this.aMouseFocusable && this.aMouseFocus === null)
            {
                this.aMouseFocus = this;
            }
        }
        return this.aMouseFocus;
    }
}

export {MouseFocusable};
export default {MouseFocusable};