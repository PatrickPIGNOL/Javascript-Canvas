export class DragDropEvent
{
    constructor(pMouseFocusable, pMouseOrigin)
    {
        this.aMouseFocusable = pMouseFocusable;
        this.aMouseFocusable.Draged = true;
        this.aParent = this.aMouseFocusable.Parent;
        this.aX = this.aMouseFocusable.X;
        this.aY = this.aMouseFocusable.Y;
        this.aWidth = this.aMouseFocusable.Width;
        this.aHeight = this.aMouseFocusable.Height;
        this.aMouseOrigin = pMouseOrigin;
        this.aCurrentMouse = pMouseOrigin;
        this.aTarget = null;
    }

    get MouseFocusable()
    {
        return this.aMouseFocusable;
    }
    
    get MouseOrigin()
    {
        return this.aMouseOrigin;
    }

    get CurrentMousse()
    {
        return this.aCurrentMouse;
    }

    get Target()
    {
        return this.aTarget;
    }

    mUpdate(pCurrentMouse, pTarget)
    {
        this.aCurrentMouse = pCurrentMouse;
        this.aTarget = pTarget;
        if(this.aTarget && this.aTarget.mAllowDrop(this))
        {
            this.aMouseFocusable.X = this.aTarget.mDropZone(this).X + this.aTarget.AbsoluteX;
            this.aMouseFocusable.Y = this.aTarget.mDropZone(this).Y + this.aTarget.AbsoluteY;
            this.aMouseFocusable.Width = this.aTarget.mDropZone(this).Width;
            this.aMouseFocusable.Height = this.aTarget.mDropZone(this).Height;
        }
        else
        {
            this.aMouseFocusable.X = (this.aX - (this.aMouseOrigin.clientX - this.aParent.AbsoluteX)) + (pCurrentMouse.clientX - this.aParent.AbsoluteX);
            this.aMouseFocusable.Y = (this.aY - (this.aMouseOrigin.clientY -                  this.aParent.AbsoluteY)) + (pCurrentMouse.clientY - this.aParent.AbsoluteY);
            this.aMouseFocusable.Width = this.aWidth;
            this.aMouseFocusable.Height = this.aHeight;
        }
    }

    mDrop(pCurrentMouse, pTarget)
    {
        this.aCurrentMouse = pCurrentMouse;
        this.aTarget = pTarget;
        if
        (
            this.aTarget 
            && 
            this.aTarget.mAllowDrop(this)
        )
        {
            this.aMouseFocusable.Parent.mRemoveComponent(this.aMouseFocusable);
            this.aMouseFocusable.Parent = this.aTarget;
            this.aMouseFocusable.Parent.mAddComponent(this.aMouseFocusable);
            this.aMouseFocusable.X = this.aTarget.mDropZone(this).X;
            this.aMouseFocusable.Y = this.aTarget.mDropZone(this).Y;
            this.aMouseFocusable.Width = this.aTarget.mDropZone(this).Width;
            this.aMouseFocusable.Height = this.aTarget.mDropZone(this).Height;
        }
        else
        {
            this.aMouseFocusable.X = this.aX;
            this.aMouseFocusable.Y = this.aY;
            this.aMouseFocusable.Width = this.aWidth;
            this.aMouseFocusable.Height = this.aHeight;
        }
        this.aMouseFocusable.Draged = false;
    }
}

export default {DragDropEvent}