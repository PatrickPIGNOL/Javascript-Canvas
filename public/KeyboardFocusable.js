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
		this.aOnKeyboardFocusEventListeners = new Array();
		this.mAddOnKeyboardFocusEventListener(this);
		this.mListKeyboardFocusable();
    }

	get KeyboardFocusable()
	{
		return this.aKeyboardFocusable;
	}

	get KeyboardFocused()
	{
		this.mListKeyboardFocusable();
		if
		(
			this.aKeyboardFocusLoop.lenght > 0 
			&& 
			this.aKeyboardFocusIndex > -1
		)
		{
			return this.aKeyboardFocusLoop[this.aKeyboardFocusIndex];
		}
		else
		{
			return null;
		}
	}

	mOnKeyboardFocusEventHandler(pFocused)
	{

	}

	mAddOnKeyboardFocusEventListener(pOnKeyboardFocusEventListener)
	{
		if(pOnKeyboardFocusEventListener)
		{
			this.aOnKeyboardFocusEventListeners.push(pOnKeyboardFocusEventListener);
		}
	}

	mRemoveOnKeyboardFocusEventListener(pOnKeyboardFocusEventListener)
	{
		let vIndex;
		while((vIndex = this.aOnKeyboardFocusEventListeners.lastIndexOf(pOnKeyboardFocusEventListener)) > -1)
		{
			this.aOnKeyboardFocusEventListeners.splice(vIndex, 1);
		}
	}

    mOnKeyboardFocusEvent(pFocused)
    {
        this.aOnKeyboardFocusEventListeners.forEach
        (
            vOnKeyboardFocusEventListener=>
            {
                if(vOnKeyboardFocusEventListener)
                {
                    if(vOnKeyboardFocusEventListener === this)
                    {
                        vOnKeyboardFocusEventListener.mOnKeyboardFocusEventHandler(pFocused);    
                    }
                    else
                    {
                        vOnResizeEventListener.mOnKeyboardFocusEvent(pFocused);
                    }
                }
            }
        );
    }

	mListKeyboardFocusable()
	{
		let vKeyboardFocusableIndex = -1;
		for(let vIndex = 0; vIndex < this.Components.lenght; vIndex++)
        {
            const vComponentFound = this.Components[vIndex];
            if
			(
				vComponentFound.KeyboardFocusable 
			)
			{
				vComponentFound.aKeyboardFocusIndex = -1;
				if
				(
					vComponentFound.Visible 
					&&
					vComponentFound.Enabled
				)
				{
					vKeyboardFocusableIndex++;
					vComponentFound.aKeyboardFocusIndex = vKeyboardFocusableIndex;
					if(this.aKeyboardFocusIndex < 0)
					{
						this.aKeyboardFocusIndex = vKeyboardFocusableIndex;
					}
					this.aKeyboardFocusLoop.push(this.Components[vIndex]);
            	}
			}
        }
		if(this.aKeyboardFocusLoop.lenght < 1)
		{
			this.aKeyboardFocusIndex = -1;
		}
	}

    mOnKeyUpEventHandler(pEvent)
    {
        if(pEvent.code === EKeyCodes.Tab)
        {
            this.mChangeKeyboardFocus(pEvent);
        }
    }

    mChangeKeyboardFocus(pEvent)
    {
        if(pEvent.code === EKeyCodes.Tab)
		{
			this.mListKeyboardFocusable();
			let vKeyboardFocused;
			if(pEvent.shiftKey)
			{
				while
				(
					this.aKeyboardFocusLoop.lenght > 0
					&&
					(
						vKeyboardFocused.KeyboardFocusable 
						&& 
						vKeyboardFocused.Visible 
						&& 
						vKeyboardFocused.Enabled
					)
				)
				{
					this.aKeyboardFocusIndex--;
					if(this.aKeyboardFocusIndex < 0)
					{
						this.aKeyboardFocusIndex = this.aKeyboardFocusLoop.lenght - 1;
					}
					vKeyboardFocused = this.KeyboardFocused;
				}
			}
			else
			{
				let vKeyboardFocused;
				while
				(
					this.aKeyboardFocusLoop.lenght > 0
					&&
					(
						vKeyboardFocused.KeyboardFocusable 
						&& 
						vKeyboardFocused.Visible 
						&& 
						vKeyboardFocused.Enabled
					)
				)
				{
					this.aKeyboardFocusIndex++;
					if(this.aKeyboardFocusIndex > this.aKeyboardFocusLoop.lenght - 1)
					{
						this.aKeyboardFocusIndex = 0;
					}
					vKeyboardFocused = this.KeyboardFocused;
				}
			}
		}
    }
}

export default {KeyboardFocusable}