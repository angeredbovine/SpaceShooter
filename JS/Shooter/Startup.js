document.addEventListener('DOMContentLoaded', function()
{

	DB.Prepare();
	SoundManager.Initialize();
	Settings.Load();

	var json = {};
	json.next = {};
	json.next.stage_id = "Stages/Stage";
	json.next.player_id = "Characters/Player";

	json.next.patterns = [];
	json.next.patterns[0] = "Patterns/Bullet";

	json.next.actors = [];
	json.next.actors[0] = "Actors/Enemy";

	json.next.images = [];
	json.next.images[0] = "Plane.png";

	json.next.sheets = [];
	json.next.sheets[0] = "Sheets/Empty";
	json.next.sheets[1] = "Sheets/Test";

	json.sounds = [];
	json.sounds[0] = "Sounds/Effects/Shoot.wav";
	json.sounds[1] = "Sounds/Music/Track1.mp3";
	json.sounds[2] = "Sounds/Music/Track2.mp3";

	json.images = [];
	json.images[0] = "Plane.png";

	json.sheets = [];
	json.sheets[0] = "Sheets/Test";

	json.sheet_references = [];
	json.sheet_references[0] = {};
	json.sheet_references[0].reference = "Test";
	json.sheet_references[0].image = "Plane.png";
	json.sheet_references[0].x = 960;
	json.sheet_references[0].y = 300;
	json.sheet_references[0].scale = {x: 0.1, y: 0.1};
	json.sheet_references[0].offset = {x: 0, y: 0};
	json.sheet_references[0].frame = 0;

	var loading = new LoadingScreen(new Shooter());
	loading.Initialize(json);
	loading.Load(json);

	SoundManager.LoadSounds(json.sounds);

	GameLoop(0, loading);

	ResizeCanvas();

});
