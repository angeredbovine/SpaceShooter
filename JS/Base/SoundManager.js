const CONST_MESSAGE_TYPE_SOUNDEFFECT = "SoundEffect";

function SoundEffect()
{

    this.loaded = false;
    this.locator = "";

    this.buffer = null;

}

SoundEffect.prototype.Load = function(locator)
{

    //TODO: May want to abstract this out so it can be different in different builds

    var caller = this;

    this.loaded = false;

    this.locator = locator;

    var request = new XMLHttpRequest();
    request.open('GET', "DB/" + locator, true);
    request.responseType = 'arraybuffer';

    request.onload = function()
    {

        SoundManager.context.decodeAudioData(request.response, caller.FillBuffer.bind(caller), caller.BufferError.bind(caller));

    }
    request.send();

}

SoundEffect.prototype.FillBuffer = function(data)
{

    this.buffer = data;

    this.loaded = true;

    GameLoaded();

}

SoundEffect.prototype.BufferError = function(err)
{

    Logger.LogError("Error loading sound effect " + this.locator + " with error: " + err);

}

SoundEffect.prototype.Loaded = function()
{

    return this.loaded;

}

SoundEffect.prototype.Play = function()
{

    var source = SoundManager.context.createBufferSource();
    source.buffer = this.buffer;
    source.connect(SoundManager.context.destination);

    source.start(0);

}

function SoundManager()
{
}

SoundManager.Initialize = function()
{

    SoundManager.audio_context = window.AudioContext || window.webkitAudioContext;

    if(!SoundManager.audio_context)
    {

        Logger.LogError("Unable to find WebAudio Context");

        return;

    }

    SoundManager.context = new AudioContext();

    SoundManager.buffers = {};

}

SoundManager.LoadSounds = function(json)
{

    for(var i = 0; i < json.length; i++)
    {

        var locator = json[i];
        json[i] = Helpers.TrimLocator(json[i]);

        SoundManager.buffers[json[i]] = new SoundEffect();
        SoundManager.buffers[json[i]].Load(locator);

    }

}

SoundManager.Loaded = function()
{

    for(var sound in SoundManager.buffers)
    {

        if(!SoundManager.buffers[sound].Loaded())
        {

            return false;

        }

    }

    return true;

}

SoundManager.ProcessSoundMessages = function()
{

    var message = Messenger.ReadMessage(CONST_MESSAGE_TYPE_SOUNDEFFECT, true, 0);
    while(!message.IsEmpty())
    {

        var sound = message.Sound();

        if(!(sound in SoundManager.buffers))
        {

            Logger.LogError("Attempting to play missing sound " + sound);

        }
        else
        {

            SoundManager.buffers[sound].Play();

        }

        message = Messenger.ReadMessage(CONST_MESSAGE_TYPE_SOUNDEFFECT, true, 0);

    }

}

function SoundEffectMessage(sound)
{

	Message.call(this, CONST_MESSAGE_TYPE_SOUNDEFFECT);

	this.sound = sound;

}

SoundEffectMessage.prototype = Object.create(Message.prototype);
SoundEffectMessage.prototype.constructor = SoundEffectMessage;

SoundEffectMessage.prototype.Sound = function()
{

	return this.sound;

}
