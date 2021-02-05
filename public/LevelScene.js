import {Scene} from "./Scene.js";
import {GameMap} from "./GameMap.js";
import {Loader} from "./Loader.js";

export class LevelScene extends Scene
{
	static aInstance = null;
    static get Instance()
    {
        if(LevelScene.aInstance === null)
        {
            LevelScene.aInstance = new LevelScene();
        }
        return LevelScene.aInstance;
    }

    constructor()
    {
        super();
		this.aSeed = 1;
        this.aMouse = Mouse.Instance;
        this.mAddOnAllEventListener(this.aMouse);
		this.aGameMap = null;
    }

	mOnLoadEventHandler()
    {
		let vRandom = new Math.seedRandom(this.aSeed);
		let vStartPoint = {

		} 
		if(!this.aGameMap)
		{
			this.aGameMap = new GameMap(this.aSeed, 2, 15, {X: ((vRandom() * 13) + 1), Y: ((vRandom * 13) + 1)}, pPercentage);
			this.mAddOnAllEventListener(this.aGameMap);
		} 
	}

	mOnUnLoadEventHandler()
    {
        this.aTimer = 0;
    }

    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {
        super.mOnUpdateEventHandler(pCanvas, pDeltaTime);
	}

	mOnDrawEventHandler(pCanvas, pGraphicContext)
    {
		super.mOnDrawEventHandler(pCanvas,pGraphicContext);
		//this.vGameMap.mOnDrawEventHandler(pCanvas, pGraphicContext);
	}
}

export default {LevelScene}