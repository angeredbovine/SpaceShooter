function State()
{

	this.running = false;

	this.loadOrder = {};

	this.canvas = null;
	this.container = null;
	this.context = null;

}

State.prototype.Running = function(r)
{

	if(r === undefined)
	{

		return r;

	}

	this.running = (r ? true: false);

	return;

}

State.prototype.Loaded = function()
{

	for(var loaded in this.loadOrder)
	{

		if(!this.loadOrder[loaded].Loaded())
		{

			return false;

		}

	}

	if(!SoundManager.Loaded())
	{

		return false;

	}

	this.loadOrder = {};

	this.Start();

	return true;

}

State.prototype.LoadProgress = function()
{

	var progress = {];
	progress.total = 0;
	progress.loaded = 0;

	//TODO: Count loaded/total objects
	
	return progress;

}

State.prototype.Initialize = function(json)
{

	this.canvas = document.getElementById(CONST_CANVAS_ID);
	this.container = document.getElementById(CONST_CONTAINER_ID);
	this.context = this.canvas.getContext('2d');

}

State.prototype.Load = function(json)
{

	Logger.LogError("Attempting to call virtual State::Load method.");

}

State.prototype.Start = function()
{

	Logger.LogError("Attempting to call virtual State::Start method.");

}

State.prototype.Update = function(delta)
{

	Logger.LogError("Attempting to call virtual State::Update method.");

}

State.prototype.Render = function(delta)
{

	Logger.LogError("Attempting to call virtual State::Render method.");

}

State.prototype.Pause = function()
{

	Logger.LogError("Attempting to call virtual State::Pause method.");

}

State.prototype.Unpause = function()
{

	Logger.LogError("Attempting to call virtual State::Unpause method.");

}

State.prototype.UnpauseCondition = function()
{

	Logger.LogError("Attempting to call virtual State::UnpauseCondition method.");

}

State.prototype.Resize = function(width, height)
{

	Logger.LogError("Attempting to call virtual State::Resize method.");

}
