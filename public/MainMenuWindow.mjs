
import {WindowBase} from "./WindowBase.mjs";
import {Button} from "./Button.mjs";
import {MainMenuButton} from "./MainMenuButton.mjs";
import {Loader, EImage} from "./Loader.mjs";

const WindowState = Object.freeze
(
    {
        Opening: 
        {
            Width: 0,
            Height: 1,
            FadeIn: 2
        },
        Opened: 3,
        Closing: 
        {
            FadeOut: 4,
            Height: 5,
            Width: 6
        },
        Closed: 7
    }
);

class MainMenuWindow extends WindowBase
{
    constructor()
    {
        super(null, 0, 0, 200, 400);
        this.aMaxWidth = this.Width;
        this.aMaxHeight = this.Height;
        this.aLanguagesButton = new MainMenuButton(this, 10, 80, 180, 40,   " Languages");
        this.aNewGameButton = new MainMenuButton(this, 10, 130, 180, 40,    " New Game ");
        this.aLoadButton = new MainMenuButton(this, 10, 180, 180, 40,       "      Load ");
        this.aOptionsButton = new MainMenuButton(this, 10, 230, 180, 40,       "   Options ");
        this.aCreditsButton = new MainMenuButton(this, 10, 280, 180, 40,       "   Crédits ");

        this.aTimer = 0;
        this.Visible = false;
        this.aState
        
        /*
            Langues
            Nouveau Jeu
            Charger une partie
            Options
            Crédits
        */
    }


    mOpen()
    {
        if(this.aState != WindowState.Opening.Width)
        {
            this.aState = WindowState.Opening.Width;
        }
        this.Visible = true;
        this.aTimer = 0;
    }

    mClose()
    {
        if(this.aState != WindowState.Closing.FadeOut)
        {
            this.aState = WindowState.Closing.FadeOut;
        }
        this.aTimer = 0;
    }

    mOnLoadEventHandler()
    {
        this.aTimer = 0;
    }

    mOnUnLoadEventHandler()
    {
        this.aTimer = 0;
    }

    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {
        const vSpeed = 500;
        const vMinSize = 16;
        const vTimerReset = 0;
        this.aTimer += pDeltaTime;
        this.Width = vMinSize;
        this.Height = vMinSize;
        switch(this.aState)
        {
            case WindowState.Opening.Width:
            {
                if(this.Visible)
                {
                    this.Width = this.aTimer * this.aMaxWidth / vSpeed;
                    if(this.Width > this.aMaxWidth)
                    {
                        this.Width = this.aMaxWidth;
                    }
                    if(this.aTimer >= vSpeed)
                    {
                        this.aTimer = vTimerReset;
                        this.aState = WindowState.Opening.Height;
                    }
                }                
            }break;
            case WindowState.Opening.Height:
            {
                this.Width = this.aMaxWidth;
                this.Height = this.aTimer * this.aMaxHeight / vSpeed;
                if(this.Height > this.aMaxHeight)
                {
                    this.Height = this.aMaxHeight;
                }
                if(this.aTimer >= vSpeed)
                {
                    this.aTimer = vTimerReset;
                    this.aState = WindowState.Opening.FadeIn;
                }                
            }break;
            case WindowState.Opening.FadeIn:
            {
                this.Width = this.aMaxWidth;
                this.Height = this.aMaxHeight;
                this.Components.forEach
                (
                    vComponentFound =>
                    {
                        vComponentFound.mShow();
                    }
                );
                if(this.aTimer >= vSpeed)
                {
                    this.aTimer = vTimerReset;
                    this.aState = WindowState.Opened;
                }
            }break;
            case WindowState.Opened:
            {
                this.Width = this.aMaxWidth;
                this.Height = this.aMaxHeight;
            }break;
            case WindowState.Closing.FadeOut:
            {                  
                this.Width = this.aMaxWidth;
                this.Height = this.aMaxHeight;                
                this.Components.forEach
                (
                    vComponentFound =>
                    {
                        vComponentFound.mHide();
                    }
                );
                if(this.aTimer >= vSpeed)
                {
                    this.aTimer = vTimerReset;
                    this.aState = WindowState.Closing.Height;
                }
            }break;
            case WindowState.Closing.Height:
            {                    
                this.Width = this.aMaxWidth;
                this.Height = this.aMaxHeight - (this.aTimer * this.aMaxHeight / vSpeed);
                if(this.Height < vMinSize)
                {
                    this.Height = vMinSize;
                }
                if(this.aTimer >= vSpeed)
                {
                    this.aTimer = 0;
                    this.aState = WindowState.Closing.Width;
                }
            }break;
            case WindowState.Closing.Width:
            {                    
                this.Width = this.aMaxWidth - (this.aTimer * this.aMaxWidth / vSpeed);
                this.Height = vMinSize;                 
                if(this.Width < vMinSize)
                {
                    this.Width = vMinSize;
                }
                if(this.aTimer >= vSpeed)
                {
                    this.aTimer = vTimerReset;
                    this.aState = WindowState.Closed;
                    this.Visible = false;
                }
            }break;
            case WindowState.Closed:
            {                    
                this.Width = vMinSize;
                this.Height = vMinSize;
                this.aComponentsAlpha = 0;
                this.Visible = false;
            }break;
        };
        this.X = (pCanvas.width - this.Width) / 2;
        this.Y = (pCanvas.height - this.Height) / 2;
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {
        if(this.Visible)
        {
            pGraphicContext.globalAlpha = this.GlobalAlpha;

            pGraphicContext.save();
            pGraphicContext.translate(this.AbsoluteX, this.AbsoluteY);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.WindowBackGround.Index], "repeat"); 
            pGraphicContext.fillRect(0, 0, this.Width, this.Height);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.West.Index], "repeat");
            pGraphicContext.fillRect(0, 0, 7, this.Height);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.North.Index], "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, 8);

            pGraphicContext.restore();

            //--------

            pGraphicContext.save();
            pGraphicContext.translate(this.AbsoluteX + this.Width - 16, this.AbsoluteY);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.East.Index], "repeat");
            pGraphicContext.fillRect(9, 0, 7, this.Height);
            
            pGraphicContext.restore();

            //--------

            pGraphicContext.save();
            pGraphicContext.translate(this.AbsoluteX, this.AbsoluteY + this.Height - 8);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.South.Index], "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, 8);
            
            pGraphicContext.restore();
            
            //---------

            pGraphicContext.drawImage(Loader.Images[EImage.CornerNW.Index], this.AbsoluteX, this.AbsoluteY);
            pGraphicContext.drawImage(Loader.Images[EImage.CornerNE.Index], this.AbsoluteX + this.Width - 8, this.AbsoluteY);
            pGraphicContext.drawImage(Loader.Images[EImage.CornerSE.Index], this.AbsoluteX + this.Width - 8, this.AbsoluteY + this.Height - 8);
            pGraphicContext.drawImage(Loader.Images[EImage.CornerSW.Index], this.AbsoluteX, this.AbsoluteY + this.Height - 8);
            pGraphicContext.globalAlpha = 1;
        }
    }
}

export {MainMenuWindow};
export default {MainMenuWindow};