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
	json.sounds[1] = "Sounds/Music/Track1.mp3";
	json.sounds[2] = "Sounds/Music/Track2.mp3";

	game = new Shooter();
	game.Initialize();
	game.Load(json);

	SoundManager.LoadSounds(json.sounds);

	var tracks = [];
	tracks[0] = "Music/Track1.mp3";
	tracks[1] = "Music/Track2.mp3";

	Messenger.PostMessage(new LinearMusicMessage(tracks, 5000));

	ResizeCanvas();

});
