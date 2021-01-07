import {GraphicComponent} from "./GraphicComponent.mjs";

class SizeableComponent extends GraphicComponent
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super();
        this.aParent = pParent;
        this.aX = pX;
        this.aY = pY;
        this.aWidth = pWidth;
        this.aHeight = pHeight;
        this.aMouseFocusable = false;     
        this.aMouseFocus = null;
        this.aComponents = new Array();
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

    set MouseFocus(pMouseFocus)
    {
        this.aMouseFocus = pMouseFocus;
    }
    
    get MouseFocusable()
    {
        return this.aMouseFocusable;
    }

    set MouseFocusable(pMouseFocusable)
    {
        this.aMouseFocusable = pMouseFocusable;
    }

    mUpdateMouseFocus(pMouse)
    {
        this.aMouseFocus = null;
        this.aMouse = pMouse;
        if
        (
            (this.aMouse.clientX >= this.AbsoluteX) 
            && 
            (this.aMouse.clientX <= this.AbsoluteX + this.Width)
            &&
            (this.aMouse.clientY >= this.AbsoluteY)
            &&
            (this.aMouse.clientY <= this.AbsoluteY + this.Height)
        )
        {
            this.aComponents.forEach
            (
                vComponentFound =>
                {
                    this.aMouseFocus = vComponentFound.mUpdateMouseFocus(pMouse);
                }
            );

            if(this.aMouseFocusable && this.aMouseFocus === null)
            {
                this.aMouseFocus = this;
            }
        }
        return this.aMouseFocus;
    }
}

export {SizeableComponent};
export default {SizeableComponent};