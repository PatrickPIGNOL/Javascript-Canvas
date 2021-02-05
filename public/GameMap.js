import {MouseFocusable} from("./MouseFocusable.js")
//24x32
//13x18 topwall
//13x21 Wall
//8x24 floor 
export const EMapIndex = Object.freeze
(
	{
		Nothing:
		{
			ID: 63,
			X: 15,
			Y: 3,
			Width: 32,
			Height: 32
		},
		TopWall: 
		{
			ID: 421,
			X: 13,
			Y: 18,
			Width: 32,
			Height: 32
		},
		Wall: 
		{
			ID: 493,
			X: 13,
			Y: 21,
			Width: 32,
			Height: 32
		},
		Floor: 
		{
			ID: 192,
			X: 8,
			Y: 24,
			Width: 32,
			Height: 32
		}
	}
);

export const EDirections = Object.freeze
(
	{
		Up: 0,
		Down: 1,
		Left: 2,
		Right: 3
	}
);

export const ELayers = Object.freeze
(
	{
		Terrains: 0,
		Items: 1
	}
);

export class GameMap extends MouseFocusable
{
    constructor(pSeed, pLayers, pMapSize, pStartPoint, pPercentage)
    {
		this.aStartPoint = pStartPoint;
		this.aPercentage = pPercentage;
		this.aSeed = pSeed;
		this.aMapSize = pMapSize;
		this.aLayers = pLayers;
		this.aMap = new Array();
		for(let vZIndex = 0; vZIndex < this.aLayers; vZIndex++)
		{
			let vLayer = new Array();
			for(let vYIndex = 0; vYIndex < this.aMapSize; vYIndex++)
			{
				let vRow = new Array();
				for(let vXIndex = 0; vXIndex < this.aMapSize; vXIndex++)
				{
					if(vZIndex === 0)
					{
						vRow.push(EMapIndex.TopWall);
					}
					else
					{
						vRow.push(EMapIndex.Nothing);
					}
				}
			}
			this.aMap.push(vLayer);
		}
		if(this.aSeed)
		{
			this.aRandom = new Math.seedrandom(this.aSeed);
		}
		else
		{
			this.aRandom = new Math.seedrandom(window.performance.now());
		}
		this.mDigMap()
	}

	mDigMap(pPoint)
	{
		let vPathCount = 0;
		let vPoint = this.aStartPoint;
		if(pPoint)
		{
			vPoint = pPoint;
		}
		let vAvailableDirrections = new Array();
		if(vPoint.Y > 1 && this.aMap[ELayers.Terrains][vPoint.Y - 1][vPoint.X] === EMapIndex.TopWall)
		{
			vAvailableDirrections.push(EDirections.Up);
		}
		if(vPoint.X < this.aMapSize - 1 && this.aMap[ELayers.Terrains][vPoint.Y][vPoint.X + 1] === EMapIndex.TopWall)
		{
			vAvailableDirrections.push(EDirections.Right)
		}
		if(vPoint.Y < this.aMapSize - 1 && this.aMap[ELayers.Terrains][vPoint.Y + 1][vPoint.X] === EMapIndex.TopWall)
		{
			vAvailableDirrections.push(EDirections.Down);
		}
		if(vPoint.X > 1 && this.aMap[ELayers.Terrains][vPoint.Y][vPoint.X - 1] === EMapIndex.TopWall)
		{
			vAvailableDirrections.push(EDirections.Left);
		}
		while(vAvailableDirrections.length > 0)
		{
			if(vPathCount >= Math.floor(this.aMapSize * this.aMapSize * this.aPercentage))
			{				
				return vPathCount;
			}
			else
			{
				this.mDigCell(vPoint);
				let vRandom = Math.floor(this.aRandom() * vAvailableDirrections.length);
				let vDirrection = vAvailableDirrections[vRandom];
				vAvailableDirrections.splice(vRandom, 1);
				switch(vDirrection)
				{
					case EDirections.Up:
					{
						vPathCount += this.mDigMap({X: vPoint.X, Y: vPoint.Y - 1});
					}break;
					case EDirections.Right:
					{
						vPathCount += this.mDigMap({X: vPoint.X + 1, Y: vPoint.Y});
					}break;
					case EDirections.Down:
					{
						vPathCount += this.mDigMap({X: vPoint.X, Y: vPoint.Y + 1});
					}break;
					case EDirections.Left:
					{
						vPathCount += this.mDigMap({X: vPoint.X - 1, Y: vPoint.Y});
					}break;
					vPathCount++;
				}
			}
		}
		return vPathCount;
	}

	mDigCell(pPoint)
	{
		this.aMap[ELayers.Terrains][pPoint.Y][pPoint.X] = EMapIndex.Floor;
	}

	mOnUpdateEventHandler(pCanvas, pDeltaTime)
	{

	}

	mOnDrawEventHandler(pCanvas, pGraphicContext)
	{
		for(let vZIndex = 0; vZIndex < this.aLayers; vZIndex++)
		{		
			for(let vYIndex = 0; vYIndex < this.aMapSize; vYIndex++)
			{		
				for(let vXIndex = 0; vXIndex < this.aMapSize; vXIndex++)
				{
					pGraphicContext.drawImage(Loader.Images[EImage.SpriteSheet], sx, sy, sLargeur, sHauteur, vXIndex * 32, vYIndex * 32, 32, 32);
				}
			}
		}
	}
}

export default {GameMap};