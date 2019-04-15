var m_loadState = {};
var game_running = false;
var load_order_done = false;

function Prepped()
{

	load_order_done = true;

}

function GameLoaded()
{

	if(load_order_done && m_loadState.nextState.Loaded() && !game_running && SoundManager.Loaded())
	{

		GameLoop(0, m_loadState.nextState);
		game_running = true;

		m_loadState = m_loadState.nextState;

	}

}

function ResizeCanvas()
{

	m_loadState.Resize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', function()
{

	ResizeCanvas();

}, true);

function LoadingScreen(state)
{

	State.call(this);
	m_loadState = this;

	this.nextState = state;

	this.progress = 0;

}

LoadingScreen.prototype = Object.create(State.prototype);
LoadingScreen.prototype.constructor = LoadingScreen;

LoadingScreen.prototype.Loaded = function()
{

	for(var loaded in this.loadOrder)
	{

		if(!this.loadOrder[loaded].Loaded())
		{

			return false;

		}

	}

	this.loadOrder = {};
	
	this.Start();

	return true;

}

LoadingScreen.prototype.Initialize = function(json)
{

	this.nextState.Initialize(json.next);

}

LoadingScreen.prototype.Load = function(json)
{

	this.nextState.Load(json.next);

	//TODO: Load Render Assets

}

LoadingScreen.prototype.Start = function()
{
}

LoadingScreen.prototype.Update = function(delta)
{

	if(load_order_done)
	{

		var progress = this.nextState.LoadProgress();

		if(progress.total > 0)
		{

			this.progress = (progress.loaded / progress.total);

		}

	}

}

LoadingScreen.prototype.Render = function(delta)
{

	//TODO: Use Assets
	this.context.save();
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

	var box = new Box(75, (this.container.style.height / 2) - 35, this.container.style.width - 150, 70);
	var bar = new Box(100, (this.container.style.height / 2) - 25, (this.container.style.width - 200) * this.progress, 50);

	box.Render(this.context, "#FFFFFF", 0, "#000000");
	bar.Render(this.context, "#00FF00", 0, "#000000");

}

LoadingScreen.prototype.Pause = function()
{
}

LoadingScreen.prototype.Unpause = function()
{
}

LoadingScreen.prototype.UnpauseCondition = function()
{

	return true;

}

LoadingScreen.prototype.Resize = function(width, height)
{
}
