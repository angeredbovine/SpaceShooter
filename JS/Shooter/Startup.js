var game = {};
var game_running = false;
var load_order_done = false;

document.addEventListener('DOMContentLoaded', function()
{

	DB.Prepare();
	SoundManager.Initialize();

	var json = {};
	json.stage_id = "Stages/Stage";
	json.player_id = "Characters/Player";

	json.patterns = [];
	json.patterns[0] = "Patterns/Bullet";

	json.actors = [];
	json.actors[0] = "Actors/Enemy";

	json.images = [];
	json.images[0] = "Plane.png";

	json.sheets = [];
	json.sheets[0] = "Sheets/Empty";
	json.sheets[1] = "Sheets/Test";

	json.sounds = [];
	json.sounds[0] = "Sounds/Effects/Shoot.wav";

	game = new Shooter();
	game.Initialize();
	game.Load(json);

	SoundManager.LoadSounds(json.sounds);

	ResizeCanvas();

});

function Prepped()
{

	load_order_done = true;

}

function GameLoaded()
{

	if(load_order_done && game.Loaded() && !game_running && SoundManager.Loaded())
	{

		GameLoop(0, game);
		game_running = true;

	}

}

function ResizeCanvas()
{

	game.Resize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', function()
{

	ResizeCanvas();

}, true);
