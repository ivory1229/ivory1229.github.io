(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"燈籠_atlas_1", frames: [[0,1147,726,767],[728,1147,726,767],[1119,0,726,767],[0,0,1117,1145]]},
		{name:"燈籠_atlas_2", frames: [[728,769,333,314],[728,1085,82,229],[0,0,726,767],[728,0,726,767],[0,769,726,767],[1063,769,86,434]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["燈籠_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["燈籠_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["燈籠_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["燈籠_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["燈籠_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["燈籠_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,114.5), null);


(lib.春 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮色片9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_194 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_graphics_195 = new cjs.Graphics().p("Ag+CdQgngFgcgaQgbgagJgmQgIgnAOgiQAPgjAhgVQAVgOAXgEQAPggAfgUQAggWAmACQAsABAjAhQAjAgAFAtQAEAlgTAiQgTAigiARQgQAIgRADIgEAIQgTAigiARQgYANgcAAQgJAAgLgCg");
	var mask_graphics_196 = new cjs.Graphics().p("AhXC2QgngFgcgaQgbgagJgmQgIgnAOgjQAPgiAhgVIAIgFQAOgcAcgRQAVgOAXgEQAPggAegUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAiQgTAigiARQgQAIgRADIgEAIQgSAgggASQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_197 = new cjs.Graphics().p("AhhDUQgngFgcgaQgbgagJgmQgIgnAOgjQAFgLAGgKQACgUAHgSQAPgjAhgVIAIgFQAOgcAcgRQAVgOAXgEQAPggAegUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAhgiARQgQAIgRADIgEAIQgSAgggASIgFAHQgBAbgOAaQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_198 = new cjs.Graphics().p("Ah/DyQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIAOgJIAJgPQACgUAHgTQAPgjAhgVIAIgFQAOgcAcgRQAVgOAXgEQAOggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRACIgEAIQgSAgggASIgFAHQgBAbgOAaQgTAigiARIgEACIgCAHQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_199 = new cjs.Graphics().p("AiYEGQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIARgKQANgSAUgLIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgcAcgRQAVgOAWgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAfggASIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAighARIgGADQgSAYgaANQgZANgcAAQgJAAgLgCg");
	var mask_graphics_200 = new cjs.Graphics().p("AjKEfQgngFgcgaIgHgIIgDgCQgbgagJgmQgIgnAOgjQAPgjAhgVQAfgVAjABQAKgMAOgIQAbgRAcgCQALgMAOgIIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQANgcAcgRQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAgggARIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAigiARIgGADQgSAYgZANQgJAFgKADQgNANgSAJQgWALgZACIgNAHQgZANgcAAQgJAAgLgCg");
	var mask_graphics_201 = new cjs.Graphics().p("AkVE9QgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACIAOABQAPggAegTQAfgVAjABQAKgLAOgIQAbgSAcgCQALgMAOgIIAOgJIAJgQQACgUAGgTQAPgjAhgVIAIgFQAOgcAcgRQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAgggASIgFAHQgBAagOAaQgTAigiARIgEACIgDAHQgTAigiARIgGADQgSAYgaANQgJAFgKADQgNANgRAJQgWALgZACIgNAHQgiARgngGIgOgDIAAABQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_202 = new cjs.Graphics().p("AlWGIQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgjQAPgjAhgVQAhgVAmACIAOABQAPggAegTQAfgVAjABQAKgMAOgIQAbgSAbgCQALgMAOgIIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgcAcgRQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAgggASIgFAHQgBAbgOAaQgTAhgiARIgEACIgDAHQgTAigiARIgGADQgSAYgaANQgJAFgKADQgNANgSAJQgWALgZACIgNAHQghARgngGIgOgDIAAABQgTAigiARQgeAPgigDIACAPQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_203 = new cjs.Graphics().p("AlbG/QgngFgcgaQgbgagJgmQgIgnAOgjQAEgKAGgIIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgjQAPgiAhgVQAhgWAmACIAOABQAPggAegTQAfgVAjABQAKgMAOgIQAbgSAbgCQALgMAOgIIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgcAcgRQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAgggASIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAhgiARIgGADQgSAYgaANQgJAFgKADQgNANgSAJQgWALgZACIgNAHQghARgngGIgOgDIAAABQgTAigiARQgeAPgigDIACAPQAEAlgTAjIgDAFQAGAPACASQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_204 = new cjs.Graphics().p("Aj7HcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAigiARIgGADQgSAXgaANQgJAFgKADQgNANgSAJQgWALgZACIgNAHQghARgngGIgOgDIAAABQgKASgPANQAIARACAUQAEAlgTAjIAAAAQAMAWADAaQADAfgNAeQADAdgNAdQgRAqglAUQgaAOgfAAQgMAAgMgCg");
	var mask_graphics_205 = new cjs.Graphics().p("Aj7HcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAigiARIgGADQgSAXgaANQgJAFgKADQgNANgSAJQgWALgZACIgNAHIgNAGQAJATACAWQAEAlgSAjQgFAJgHAJQAFAOACAQQACAQgDAQIABAIIAAARQACAhgRAgQgTAigiARQgaANgcAAQgOAPgSAKQgaAOgfAAQgMAAgMgCg");
	var mask_graphics_206 = new cjs.Graphics().p("Aj7HcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAigiARIgGADQgNAQgRAMQAMAVACAYQADAdgLAcQAGAPACASQAEAlgTAjIgFAIQAEAlgTAjQgTAigiARQgiARgmgGIgOgDIAAABQgTAigiARQgaANgcAAQgOAPgSAKQgaAOgfAAQgMAAgMgCg");
	var mask_graphics_207 = new cjs.Graphics().p("Aj7HcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgTAigiARIgEACIgDAHQgTAigiARIgGADIgDADQAlAEAeAdQAjAgAFAtQACATgEASIACANQAEAlgTAjQgTAigiARQgiARgngGIgGgBIgIATQgTAigiARQgiARgmgGIgOgDIAAABQgTAigiARQgaANgcAAQgOAPgSAKQgaAOgfAAQgMAAgMgCg");
	var mask_graphics_208 = new cjs.Graphics().p("Aj7HcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgSAhggARQAeAHAZAYQAjAgAFAsQABAMgBANQARAZADAeQACAQgDAQIABAIQAEAlgTAjQgTAigiARQgiARgngGQgLgBgKgEQgcAKgfgFIgGgBIgIATQgTAigiARQgiARgmgGIgOgDIAAABQgTAigiARQgaANgcAAQgOAPgSAKQgaAOgfAAQgMAAgMgCg");
	var mask_graphics_209 = new cjs.Graphics().p("AkKHcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgPAcgaAQQAggTAjACQAsABAjAhQAbAYAJAfIAEAEQAhAeAGApQASAZADAfQABAOgBANIAAADQAEAlgTAjQgTAigiARQgiARgngGQgdgEgXgQIgPAJQgiARgngGQgLgBgKgEQgcAKgfgFIgGgBIgIATQgTAigiARQgiARgmgGIgOgDIAAABQgTAigiARQgaANgcAAQgOAPgSAKQgaAOgfAAQgMAAgMgCgADVhAIAAAAIAEgDIgEADg");
	var mask_graphics_210 = new cjs.Graphics().p("AkKHcQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPgfAegUQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgPAcgaAQQAggTAjACQAsABAjAhQAbAYAJAfIAEAEQAhAeAGApQASAZADAfQABAOgBANIAAADQAEAlgTAjQgHAMgIAJQgCAZgNAYQgTAigiARQgWALgZACIgNAHIgDACQgPARgWALQgiARgngGQgngFgcgaQgbgagJgmIgBgHQgTAigiARQgiARgmgGIgOgDIAAABQgTAigiARQgaANgcAAQgOAPgSAKQgaAOgfAAQgMAAgMgCgADVhAIAAAAIAEgDIgEADg");
	var mask_graphics_211 = new cjs.Graphics().p("ABCHqQglgJgZgaQgMgPgIgSQgRACgTgDQgWgDgTgKIgGADQgaANgcAAQgOAPgSAKQglAUgsgIQgsgIgcggQgHgIgGgKIgLgBQgngFgcgaQgbgagJgmQgIgnAOgjQAEgJAGgJIgGgSQgIgnAOgjQAPgjAhgVQAhgWAmACIAFAAIAAAAQgIgnAOgiQAPgjAhgVQAhgWAmACIAOABQAPggAegTQAfgUAjAAQAKgMAOgIQAbgRAbgDQALgLAOgJIAOgJIAJgQQACgUAHgTQAPgjAhgVIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgQAIgRADIgEAIQgSAhggARIgFAHQgBAbgOAaQgPAcgaAQQAggTAjACQAsABAjAhQAbAYAJAgIAEAEQAhAdAGApQASAZADAfQABAOgBANIAAADQAEAlgTAjQgHAMgIAJQgCAZgNAYQgTAigiARQgWALgZACIgNAHIgDACQgPARgWALQgaAOgegBQgGAUgOATQgXAfgiAMQgTAHgVAAQgPAAgQgDgADVhPIAAAAIAEgDIgEADg");
	var mask_graphics_212 = new cjs.Graphics().p("AgMIUQgngGgcgZQgbgagJgnQgGgeAHgcQgTAGgUAAQgOAPgSAKQglAVgsgIQgsgIgcggQgHgJgGgJIgLgBQgngGgcgZQgbgagJgnQgIgnAOgiQAEgKAGgJIgGgSQgIgnAOgiQAPgjAhgWQAhgVAmABIAFAAIAAAAQgIgmAOgiQAPgjAhgWQAhgVAmABIAOABQAPgfAegUQAfgUAjAAQAKgLAOgJQAbgRAbgDQALgLAOgJIAOgIIAJgQQACgVAHgSQAPgjAhgWIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgVAmABQAsABAjAhQAjAhAFAsQAEAlgTAjQgTAjgiARQgQAIgRADIgEAHQgSAhggARIgFAIQgBAagOAaQgPAcgaARQAggTAjABQAsABAjAhQAbAZAJAfIAEAEQAhAeAGAoQASAZADAfQABAOgBAOIAAACQAEAlgTAjQgHAMgIAKQgCAYgNAYQgTAjgiARQgWALgZABIgNAIIgDABQgPASgWALQgaANgegBQgGAVgOATQgXAegiANIgQAEIgIASQgTAjgiARQgZAMgcAAQgIAAgLgBgADVh3IAAAAIAEgCIgEACg");
	var mask_graphics_213 = new cjs.Graphics().p("AhmI3QgngGgcgZQgbgagJgnQgIgnAOgiQAGgNAHgKQgkATgsgHQgsgIgcggQgHgJgGgJIgLgBQgngGgcgZQgbgagJgnQgIgnAOgiQAEgKAGgJIgGgSQgIgnAOgiQAPgjAhgVQAhgVAmABIAFAAIAAAAQgIgnAOgiQAPgjAhgWQAhgVAmABIAOABQAPgfAegUQAfgUAjAAQAKgLAOgJQAbgRAbgDQALgLAOgJIAOgIIAJgQQACgVAHgSQAPgjAhgWIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgVAmABQAsABAjAhQAjAhAFAsQAEAlgTAjQgTAjgiARQgQAIgRADIgEAHQgSAhggARIgFAIQgBAagOAaQgPAcgaARQAggTAjABQAsABAjAhQAbAZAJAfIAEAEQAhAeAGApQASAYADAfQABAOgBAOIAAACQAEAlgTAjQgHAMgIAKQgCAYgNAYQgTAjgiARQgWALgZABIgNAIIgDABQgPASgWALQgaANgegBQgGAVgOATQgXAegiANIgQAEIgIASQgTAjgiARQgQAIgRADIgEAHQgTAjghARQgZAMgcAAQgJAAgLgBgADViaIAAAAIAEgCIgEACg");
	var mask_graphics_214 = new cjs.Graphics().p("Ai2KHQgngGgcgZQgbgagJgnQgIgnAOgiQAPgjAhgWQAPgKAQgFIgFgPQgIgnAOgiQAGgNAHgKQgkATgsgHQgsgIgcggQgHgJgGgJIgLgBQgngGgcgZQgbgagJgnQgIgnAOgiQAEgKAGgJIgGgSQgIgnAOghQAPgjAhgWQAhgVAmABIAFAAIAAAAQgIgnAOgiQAPgjAhgWQAhgVAmABIAOABQAPgfAegUQAfgUAjAAQAKgLAOgJQAbgRAbgDQALgLAOgJIAOgIIAJgQQACgVAHgSQAPgjAhgWIAIgFQAOgbAcgSQAVgOAXgEQAPggAfgUQAhgVAmABQAsABAjAhQAjAhAFAsQAEAlgTAjQgTAjgiARQgQAIgRADIgEAHQgSAhggARIgFAIQgBAagOAaQgPAcgaARQAggTAjABQAsABAjAhQAbAZAJAfIAEAEQAhAeAGApQASAZADAfQABAOgBAOIAAACQAEAkgTAjQgHAMgIAKQgCAYgNAYQgTAjgiARQgWALgZABIgNAIIgDABQgPASgWALQgaANgegBQgGAVgOATQgXAegiANIgQAEIgIASQgTAjgiARQgQAIgRADIgEAHQgTAjghARQgJAEgKADQAFAOACAPQAEAlgTAjQgTAjgiARQgZAMgcAAQgJAAgLgBgADVjqIAAAAIAEgCIgEACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_graphics_194,x:206.9527,y:274.0484}).wait(1).to({graphics:mask_graphics_195,x:202.4527,y:277.5484}).wait(1).to({graphics:mask_graphics_196,x:199.9527,y:280.0484}).wait(1).to({graphics:mask_graphics_197,x:198.9527,y:283.0484}).wait(1).to({graphics:mask_graphics_198,x:195.9527,y:286.0484}).wait(1).to({graphics:mask_graphics_199,x:193.4527,y:288.0484}).wait(1).to({graphics:mask_graphics_200,x:187.4527,y:290.5484}).wait(1).to({graphics:mask_graphics_201,x:180.9527,y:293.5484}).wait(1).to({graphics:mask_graphics_202,x:174.4527,y:301.0484}).wait(1).to({graphics:mask_graphics_203,x:173.9527,y:306.5484}).wait(1).to({graphics:mask_graphics_204,x:173.9527,y:309.5324}).wait(1).to({graphics:mask_graphics_205,x:173.9527,y:309.5324}).wait(1).to({graphics:mask_graphics_206,x:173.9527,y:309.5324}).wait(1).to({graphics:mask_graphics_207,x:173.9527,y:309.5324}).wait(1).to({graphics:mask_graphics_208,x:173.9527,y:309.5324}).wait(1).to({graphics:mask_graphics_209,x:175.4528,y:309.5324}).wait(1).to({graphics:mask_graphics_210,x:175.4528,y:309.5324}).wait(1).to({graphics:mask_graphics_211,x:175.4528,y:311.0335}).wait(1).to({graphics:mask_graphics_212,x:175.4528,y:314.9984}).wait(1).to({graphics:mask_graphics_213,x:175.4528,y:318.4984}).wait(1).to({graphics:mask_graphics_214,x:175.4528,y:326.4984}).wait(11));

	// 筆畫9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F1F").s().p("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");
	this.shape.setTransform(181.5786,191.7583);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(194).to({_off:false},0).wait(31));

	// 遮色片8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_184 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AAWCYQgkgFgbgXIgQgCQgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAggVAiABIAOgKQAggWAmACQAsABAjAhQAjAgAFAtQACAVgFAUIADASQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AAtC/QgegFgYgRQgNgJgJgMQgUgHgQgOIgQgBQgngGgcgZQgbgagJgnQgIgmAOgiQAPgjAhgWQAfgUAjAAIAOgKIADgCQAGgKAIgJQARgTAVgKQAXgLAagBQAbAAAWAKQAbAMAUAaQATAXAKAeQAOArgBBMQgBAmgFAYQgHAhgQAWQgTAaghAMQgWAIgXAAQgJAAgKgBg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AAADmQgdgEgZgRQgNgKgJgLQgUgHgQgOIgQgCQgngFgcgaQgbgagJgmQgIgnAOgiQAPgjAhgVQAggVAiABIAOgKIAEgDQAFgJAIgJQARgTAWgLQASgIATgCQAKgfAbgWQAcgXAhgEQAigEAhAQQAgAPASAeQAPAYAGAkQADAZgBAoQgBA0gGAjQgJAwgTAkQgVApgmAZQgZARgaAFQgLAIgOAFQgVAIgXAAQgKAAgKgCg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AgmDrQgegEgYgRQgNgKgKgLQgTgIgQgNIgQgCQgogFgbgaQgcgagIgmQgJgnAPgjQAOgiAhgVQAggVAjABIANgKIAEgDQAGgJAHgJQARgTAXgLQARgIATgCQALgfAbgWQAbgXAigEIALgBQAcgNAjAFQAlAFAdAWQAbAWASAiQAQAfAFAlQACAQAAAdIADArIAFAuQADAagEATQgGAZgTAWQgSAUgZALQgoATg1gFIgIAGQgZARgaAFQgMAIgNAFQgWAIgWAAQgKAAgKgCg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AhYD6QgegFgZgRQgNgJgJgMQgUgHgQgOIgQgBQgngGgcgZQgbgagJgnQgIgnAOgiQAPgiAhgWQAggUAiAAIAOgKIAEgCQAFgKAIgIQARgUAWgKQASgJATgCQALgfAbgWQAcgWAggEIALgBQAdgNAiAEQARACAPAGQAKgKAMgIQAhgVAmABQAsABAjAhQAjAhAFAsQAEAlgTAjIgEAHQAAAUgGASQAEALABALQAEAlgTAjQgTAjgiARQgLAFgMADQgGANgLAMQgRAUgaAMQgoASg0gEIgJAGQgZAQgaAGQgKAHgOAFQgVAIgXAAQgKAAgKgBg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AhxD6QgegFgZgRQgNgJgJgMQgUgHgQgOIgQgBQgngGgcgZQgbgagJgnQgIgnAOgiQAPgiAhgWQAggUAiAAIAOgKIAEgCQAFgKAIgIQARgUAWgKQASgJATgCQALgfAbgWQAcgWAhgEIALgBQAcgNAiAEQARACAPAGQAKgKAMgIQAhgVAmABQAsABAjAhIABABQAbAIAWAVQAjAhAFAsQADAdgLAcQAGAQACARQAEAkgTAjQgTAjgiARQgbANgegBIgNAIQgLAFgMADQgGANgLAMQgRAUgaAMQgoASg0gEIgJAGQgZAQgZAGQgLAHgOAFQgVAIgXAAQgKAAgKgBg");
	var mask_1_graphics_191 = new cjs.Graphics().p("Ai8D6QgegFgZgRQgNgJgJgMQgUgHgQgOIgQgBQgngGgcgZQgbgagJgnQgIgnAOgiQAPgiAhgWQAggUAiAAIAOgKIAEgCQAFgKAIgIQARgUAWgKQASgJATgCQALgfAbgWQAcgWAhgEIALgBQAdgNAiAEQARACAOAGQAKgKAMgIQAhgVAmABQAsABAjAhIABABQANAEANAHQAegRAiABQAsABAjAhQAjAhAFAsQACAQgDAQQAbAdAEAnQAEAkgTAjQgTAjgiARQgiARgngGIgQgEQgZAIgdgEQgUgDgRgIQgNADgOgBIgNAIQgLAFgMADQgGANgLAMQgRAUgaAMQgoASgzgEIgJAGQgZAQgaAGQgLAHgOAFQgVAIgXAAQgKAAgKgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(184).to({graphics:mask_1_graphics_184,x:147.9527,y:279.0484}).wait(1).to({graphics:mask_1_graphics_185,x:151.9532,y:279.0484}).wait(1).to({graphics:mask_1_graphics_186,x:154.5962,y:278.6996}).wait(1).to({graphics:mask_1_graphics_187,x:159.054,y:274.7347}).wait(1).to({graphics:mask_1_graphics_188,x:162.916,y:274.244}).wait(1).to({graphics:mask_1_graphics_189,x:167.9527,y:272.7959}).wait(1).to({graphics:mask_1_graphics_190,x:170.4529,y:272.7959}).wait(1).to({graphics:mask_1_graphics_191,x:177.9527,y:272.7959}).wait(34));

	// 筆畫8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332F1F").s().p("AjYbDQA1hYBPg6QhqAbhoglQAwCMhmA5QiAgShEjnQg7jJACkpQABkZA0jRQA3jeBRgCQhBB5gYCDQA2igBYiVQAYANAWAPQgOgFAbBaQAjBwgWhbQE6iGC4gUQE9gkByDnQAdA9ArAoQAtApA2AOIggADIAqgBQA2ALA6gQIgSAAIheAFIgKgCQB0gPBRgTQglAUgmALQBKgEA8gtQgLAIgwAKQAWgMASgLQBAgsjOiMQhrhIiUhPQjeh2jkgsQjWgqkKAOQkAHqkUERQmeGZmZiFQgvAjhKhwQgdgtgSgvQgSgxAEgbQAUiCCTiIQBnhhCoheQBXgwDRhkQgLAFBWggQkKBujLCLQjoCghMCZQgTAlAHA9QAHA6AbA1QAdA3AnAXQAtAaAugYQENiQATgMQCZhaBshtQFBlDC0k1QiLATjEBHQBCgbAPgLQAQgMgrAIQEig+AbgwQjgBShBASQivAvh/gbQgdgKgjgQQhJggAUgPQBtBqC7glQBBgMBegiICSg1Qj/BOiBgGQjPgKhsi4QA0ArBDgKQhFgMBKgVQMFAFBZlgQhqADhzgMQjBgVAHg5QB6BSCSgJQh2gTg+gZQhggngwhJQAWgCCHABQBpABA+gLQC+gfAaigQhvAQiDgXQhGgLifgsQAhgWBcgkICphBQDUhYAHhRIgFkXQgFkKAEgLIgBgOQgFgHACgKQABAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAQgBhzA8gCQCegUBzEYQAsBqAZB6QAXBwgEBCQAmgJBQgJQBkgKBGAFQDPAOiaCFQg4AxhNAjQhYAkgpASQhHAegpAlQg1AwgfBPQA/gQBQAEQBUAEA3AZQA+AdgCAuQgCA3haBHQg1AqhEANQgSADhfAIQhAAFgjAUQgxAcggBGQERg9EggTQEwgUEIAeQDeAZBsAnQDPBLjFB5QhbA5iPADQhqADisgdQjCglhegOQiigXhnAMQi1ALhzARQjYAggoBQQD+goEoAVQE8AXEaBYQE4BiDbCkQD1C4BqD6QA6CIiDARQhnANjsg/QhggZk3hiQjfhHg4gBQAXBxAJCYQAKCugNCgQghGbioCFQhSBBhehcQgbgbgvg8Qgug7gUgTQg6g2jMCuQhMBAhFBKQhBBEgPAcQADhcA4hegAhGYVQhbAchdgSQBeAjBagtgACuQiQh1CGhvBHQAfgLBXgLQBfgMAqgLQCZgqgwiHIAljwQguB0h7CNgAkWNwQgOD1gBBSQCTg7AxgbQBpg9AuhVQACgBABgBQABAAAAAAQgBAAgCABQgCABgDABQANgNAAgRQinBBhfgoQhxgvBTi0QAAAmBSgKQArgGCMgkQCFghA+gGQBfgIAUAqQgchqAghhQAIgOAEgOQAMAeAFAiQgDgqgLggQADgagUgNQgcgvgxgRQAlASAbAoQhKgbkDA/Qj7BEgVgBQAECHgMDLgA1ROWQhgA1iGA+QB7gmBthAQBwhBBnhWQhgBHh5BDgABHOwIgGANIANgDQABAAACgFQgHgGgCAAIgBABgAoXKwQgIAfgDAZQAKgwANgzIgMArgAOqJsQgSgJhwgLQhwgLABAHQB2gBB7AZIAAAAgAs+HDQgnArgRAjQBBhJA5hJIhCBEgAkCIKQAaAVBVgqQg7AVg0AAgAgSG4QBfgvBlgUIAFgBQhaAIhvA8gAM3EEQg+gogygcIAVAPIgWgPQirhiirgqIC/BHQCLA+B9BLIAAAAgAEWATQCIAYCAA2QgzgahugmQiFgth5gcQlVhNg7ByQAhgCDrABQDEABgEgJgApcgRQA2gIAtgaQiwAoBNgGgATWieQAugEAdgQQgoAPgjAFgAjwtTIgYCDQAqiMgKAAQgCAAgGAJgAl+t1Qh7ACARADQAkAIBaADQBpACADgTIiAABgApRt7IgfgFQAVAIAKgDgACNvIQgCAHAMgKgAjS2uQAGDHgFBlQA7gPgYjhQgokMgHhdIALEtgAkIcgIgIA1QgFgRANgkgAjLP+QhDgGAEgyQAQATA+ANQA+AMA/gCQhGAPgvAAIgXgBgAAyPQQgeAchTAEQA4gNA5gTgAFPG3QAGACAHAEQAJAQAIAXIgDAKQgKgegRgZgAmaEwQgCgEAEgCQABABABAAQAAAAAAABQAAABAAAAQAAABgBABQgCAEABACIgCgFgAmXEdQgEgIAFgBQAHAQgFADQABgBgEgJgAzSAHQgGgBgEgGQACgDAFAEQAGAGADAAIgGAAgAzvgNQgNgBgCgIQAjgDgGASQgBgFgNgBgACGgNQASgKAHAEQgCgBgKAGQgEAEgEAAQgDAAgCgDgACngPQAAgDAGABQAGADACgCIgFADIgDABQgDAAgDgDgArxpBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQABAAABABQAAAAABABQAAAAABAAQAAAAABAAIgGABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAAAgBgAsGpGQAYgLgGAMIgHABQgGAAgFgCgAjq8jQgIgKAEgHQAOATAAAMQgBgEgJgKg");
	this.shape_1.setTransform(181.5786,191.7583);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(184).to({_off:false},0).wait(41));

	// 遮色片72 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_179 = new cjs.Graphics().p("AM2a/IFJlJICWCXIlJFJg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AkDBFIFIlIIC/C/IlIFIg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AkXAyIFIlJIDnDmIlIFJg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AkrAeIFJlIIEOENIlJFIg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AKUYeIFJlJIE2E1IlJFKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_2_graphics_179,x:130.1377,y:187.7661}).wait(1).to({graphics:mask_2_graphics_180,x:234.175,y:349.475}).wait(1).to({graphics:mask_2_graphics_181,x:232.075,y:347.4}).wait(1).to({graphics:mask_2_graphics_182,x:229.95,y:345.275}).wait(1).to({graphics:mask_2_graphics_183,x:129.911,y:187.5567}).wait(42));

	// 筆畫72
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332F1F").s().p("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");
	this.shape_2.setTransform(181.5786,191.7583);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(179).to({_off:false},0).wait(46));

	// 遮色片71 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_159 = new cjs.Graphics().p("AMSSGIAAiUIJEAAIAACUg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AkhByIAAjjIJDAAIAADjg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AkhCaIAAkzIJDAAIAAEzg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AkhDCIAAmDIJDAAIAAGDg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AkhDqIAAnTIJDAAIAAHTg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AkhESIAAojIJDAAIAAIjg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AkhE6IAApzIJDAAIAAJzg");
	var mask_3_graphics_166 = new cjs.Graphics().p("AkhFiIAArDIJDAAIAALDg");
	var mask_3_graphics_167 = new cjs.Graphics().p("AkhGKIAAsTIJDAAIAAMTg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AkhGyIAAtjIJDAAIAANjg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AkhHaIAAuzIJDAAIAAOzg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AkhICIAAwDIJDAAIAAQDg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AkhIqIAAxTIJDAAIAARTg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AkhJSIAAyjIJDAAIAASjg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AkhJ6IAAzzIJDAAIAATzg");
	var mask_3_graphics_174 = new cjs.Graphics().p("AkhKiIAA1DIJDAAIAAVDg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AkhLKIAA2TIJDAAIAAWTg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AkhLyIAA3jIJDAAIAAXjg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AkhMaIAA4zIJDAAIAAYzg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AMOdmIAA6DIJEAAIAAaDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_3_graphics_159,x:136.6,y:115.7755}).wait(1).to({graphics:mask_3_graphics_160,x:244.15,y:227.925}).wait(1).to({graphics:mask_3_graphics_161,x:244.1,y:231.675}).wait(1).to({graphics:mask_3_graphics_162,x:244.1,y:235.425}).wait(1).to({graphics:mask_3_graphics_163,x:244.05,y:239.175}).wait(1).to({graphics:mask_3_graphics_164,x:244,y:242.95}).wait(1).to({graphics:mask_3_graphics_165,x:243.95,y:246.7}).wait(1).to({graphics:mask_3_graphics_166,x:243.9,y:250.45}).wait(1).to({graphics:mask_3_graphics_167,x:243.9,y:254.2}).wait(1).to({graphics:mask_3_graphics_168,x:243.85,y:257.95}).wait(1).to({graphics:mask_3_graphics_169,x:243.8,y:261.725}).wait(1).to({graphics:mask_3_graphics_170,x:243.75,y:265.475}).wait(1).to({graphics:mask_3_graphics_171,x:243.75,y:269.225}).wait(1).to({graphics:mask_3_graphics_172,x:243.7,y:272.975}).wait(1).to({graphics:mask_3_graphics_173,x:243.65,y:276.725}).wait(1).to({graphics:mask_3_graphics_174,x:243.6,y:280.5}).wait(1).to({graphics:mask_3_graphics_175,x:243.55,y:284.25}).wait(1).to({graphics:mask_3_graphics_176,x:243.55,y:288}).wait(1).to({graphics:mask_3_graphics_177,x:243.5,y:291.75}).wait(1).to({graphics:mask_3_graphics_178,x:136.225,y:189.4466}).wait(47));

	// 筆畫71
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332F1F").s().p("AjYbDQA1hYBPg6QhqAbhoglQAwCMhmA5QiAgShEjnQg7jJACkpQABkZA0jRQA3jeBRgCQhBB5gYCDQA2igBYiVQAYANAWAPQgOgFAbBaQAjBwgWhbQE6iGC4gUQE9gkByDnQAdA9ArAoQAtApA2AOIggADIAqgBQA2ALA6gQIgSAAIheAFIgKgCQB0gPBRgTQAWgMASgLQBAgsjOiMQhrhIiUhPQjeh2jkgsQjWgqkKAOQkAHqkUERQmeGZmZiFQgvAjhKhwQgdgtgSgvQgSgxAEgbQAUiCCTiIQBnhhCoheQBXgwDRhkQgLAFBWggQkKBujLCLQjoCghMCZQgTAlAHA9QAHA6AbA1QAdA3AnAXQAtAaAugYQENiQATgMQCZhaBshtQFBlDC0k1QiLATjEBHQBCgbAPgLQAQgMgrAIQEig+AbgwQjgBShBASQivAvh/gbQgdgKgjgQQhJggAUgPQBtBqC7glQBBgMBegiICSg1Qj/BOiBgGQjPgKhsi4QA0ArBDgKQhFgMBKgVQMFAFBZlgQhqADhzgMQjBgVAHg5QB6BSCSgJQh2gTg+gZQhggngwhJQAWgCCHABQBpABA+gLQC+gfAaigQhvAQiDgXQhGgLifgsQAhgWBcgkICphBQDUhYAHhRIgFkXQgFkKAEgLIgBgOQgFgHACgKQABAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAQgBhzA8gCQCegUBzEYQAsBqAZB6QAXBwgEBCQAmgJBQgJQBkgKBGAFQDPAOiaCFQg4AxhNAjQhYAkgpASQhHAegpAlQg1AwgfBPQA/gQBQAEQBUAEA3AZQA+AdgCAuQgCA3haBHQg1AqhEANQgSADhfAIQhAAFgjAUQgxAcggBGQERg9EggTQEwgUEIAeQDeAZBsAnQDPBLjFB5QhbA5iPADQhqADisgdQjCglhegOQiigXhnAMQi1ALhzARQjYAggoBQQD+goEoAVQE8AXEaBYQE4BiDbCkQD1C4BqD6QA6CIiDARQhnANjsg/QhggZk3hiQjfhHg4gBQAXBxAJCYQAKCugNCgQghGbioCFQhSBBhehcQgbgbgvg8Qgug7gUgTQg6g2jMCuQhMBAhFBKQhBBEgPAcQADhcA4hegAhGYVQhbAchdgSQBeAjBagtgACuQiQh1CGhvBHQAfgLBXgLQBfgMAqgLQCZgqgwiHIAljwQguB0h7CNgAkWNwQgOD1gBBSQCTg7AxgbQBpg9AuhVQACgBABgBQABAAAAAAQgBAAgCABQgCABgDABQANgNAAgRQinBBhfgoQhxgvBTi0QAAAmBSgKQArgGCMgkQCFghA+gGQBfgIAUAqQgchqAghhQAIgOAEgOQAMAeAFAiQgDgqgLggQADgagUgNQgcgvgxgRQAlASAbAoQhKgbkDA/Qj7BEgVgBQAECHgMDLgA1ROWQhgA1iGA+QB7gmBthAQBwhBBnhWQhgBHh5BDgABHOwIgGANIANgDQABAAACgFQgHgGgCAAIgBABgAoXKwQgIAfgDAZQAKgwANgzIgMArgAOqJsQgSgJhwgLQhwgLABAHQB2gBB7AZIAAAAgAPyInQglAUgmALQBKgEA8gtQgLAIgwAKgAs+HDQgnArgRAjQBBhJA5hJIhCBEgAkCIKQAaAVBVgqQg7AVg0AAgAgSG4QBfgvBlgUIAFgBQhaAIhvA8gAM3EEQg+gogygcIAVAPIgWgPQirhiirgqIC/BHQCLA+B9BLIAAAAgAEWATQCIAYCAA2QgzgahugmQiFgth5gcQlVhNg7ByQAhgCDrABQDEABgEgJgApcgRQA2gIAtgaQiwAoBNgGgATWieQAugEAdgQQgoAPgjAFgAjwtTIgYCDQAqiMgKAAQgCAAgGAJgAl+t1Qh7ACARADQAkAIBaADQBpACADgTIiAABgApRt7IgfgFQAVAIAKgDgACNvIQgCAHAMgKgAjS2uQAGDHgFBlQA7gPgYjhQgokMgHhdIALEtgAkIcgIgIA1QgFgRANgkgAjLP+QhDgGAEgyQAQATA+ANQA+AMA/gCQhGAPgvAAIgXgBgAAyPQQgeAchTAEQA4gNA5gTgAFqHuQgKgegRgZQAGACAHAEQAJAQAIAXIgDAKIAAAAgAmaEwQgCgEAEgCQABABABAAQAAAAAAABQAAABAAAAQAAABgBABQgCAEABACIgCgFgAmXEdQgEgIAFgBQAHAQgFADQABgBgEgJgAzSAHQgGgBgEgGQACgDAFAEQAGAGADAAIgGAAgAzvgNQgNgBgCgIQAjgDgGASQgBgFgNgBgACGgNQASgKAHAEQgCgBgKAGQgEAEgEAAQgDAAgCgDgACngPQAAgDAGABQAGADACgCIgFADIgDABQgDAAgDgDgArxpBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQABAAABABQAAAAABABQAAAAABAAQAAAAABAAIgGABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAAAgBgAsGpGQAYgLgGAMIgHABQgGAAgFgCgAjq8jQgIgKAEgHQAOATAAAMQgBgEgJgKg");
	this.shape_3.setTransform(181.5786,191.7583);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(159).to({_off:false},0).wait(66));

	// 遮色片7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_144 = new cjs.Graphics().p("AhyDZIAAmyIDlAAIAAGyg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AiajMIEtgYIAIGxIktAYg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AjCi/IF1gwIAQGwIl1Avg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AjrizIG+hIIAZGvIm/BIg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AkTinIIHhfIAgGtIoGBgg");
	var mask_4_graphics_149 = new cjs.Graphics().p("Ak7iaIJPh3IAoGsIpPB3g");
	var mask_4_graphics_150 = new cjs.Graphics().p("AljiOIKXiPIAwGsIqXCPg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AmMiBILginIA5GqIrgCng");
	var mask_4_graphics_152 = new cjs.Graphics().p("Am0h1IMoi/IBBGqIspC+g");
	var mask_4_graphics_153 = new cjs.Graphics().p("AnchoINxjXIBIGoItxDXg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AoEhcIO5juIBRGnIu6Dug");
	var mask_4_graphics_155 = new cjs.Graphics().p("AothPIQDkGIBXGmIwBEGg");
	var mask_4_graphics_156 = new cjs.Graphics().p("ApVhEIRKkdIBhGlIxLEeg");
	var mask_4_graphics_157 = new cjs.Graphics().p("Ap9g2ISTk3IBoGlIyTE1g");
	var mask_4_graphics_158 = new cjs.Graphics().p("AhaOCITblNIBxGkIzcFNg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_4_graphics_144,x:130.55,y:234.7}).wait(1).to({graphics:mask_4_graphics_145,x:134.475,y:234.075}).wait(1).to({graphics:mask_4_graphics_146,x:138.375,y:233.425}).wait(1).to({graphics:mask_4_graphics_147,x:142.3,y:232.825}).wait(1).to({graphics:mask_4_graphics_148,x:146.2,y:232.2}).wait(1).to({graphics:mask_4_graphics_149,x:150.125,y:231.575}).wait(1).to({graphics:mask_4_graphics_150,x:154.025,y:230.925}).wait(1).to({graphics:mask_4_graphics_151,x:157.95,y:230.325}).wait(1).to({graphics:mask_4_graphics_152,x:161.875,y:229.7}).wait(1).to({graphics:mask_4_graphics_153,x:165.775,y:229.05}).wait(1).to({graphics:mask_4_graphics_154,x:169.7,y:228.425}).wait(1).to({graphics:mask_4_graphics_155,x:173.6,y:227.8}).wait(1).to({graphics:mask_4_graphics_156,x:177.525,y:227.2}).wait(1).to({graphics:mask_4_graphics_157,x:181.425,y:226.55}).wait(1).to({graphics:mask_4_graphics_158,x:126.5966,y:131.8125}).wait(67));

	// 筆畫7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332F1F").s().p("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");
	this.shape_4.setTransform(181.5786,191.7583);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(144).to({_off:false},0).wait(81));

	// 遮色片6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_125 = new cjs.Graphics().p("AGJQ8IAAieIFzAAIAACeg");
	var mask_5_graphics_126 = new cjs.Graphics().p("Ai5B4IAAjvIFzAAIAADvg");
	var mask_5_graphics_127 = new cjs.Graphics().p("Ai5ChIAAlBIFzAAIAAFBg");
	var mask_5_graphics_128 = new cjs.Graphics().p("Ai5DKIAAmTIFzAAIAAGTg");
	var mask_5_graphics_129 = new cjs.Graphics().p("Ai5D0IAAnnIFzAAIAAHng");
	var mask_5_graphics_130 = new cjs.Graphics().p("Ai5EdIAAo5IFzAAIAAI5g");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ai5FGIAAqLIFzAAIAAKLg");
	var mask_5_graphics_132 = new cjs.Graphics().p("Ai5FvIAArdIFzAAIAALdg");
	var mask_5_graphics_133 = new cjs.Graphics().p("Ai5GZIAAsxIFzAAIAAMxg");
	var mask_5_graphics_134 = new cjs.Graphics().p("Ai5HBIAAuCIFzAAIAAOCg");
	var mask_5_graphics_135 = new cjs.Graphics().p("Ai5HrIAAvVIFzAAIAAPVg");
	var mask_5_graphics_136 = new cjs.Graphics().p("Ai5IUIAAwnIFzAAIAAQng");
	var mask_5_graphics_137 = new cjs.Graphics().p("Ai5I9IAAx5IFzAAIAAR5g");
	var mask_5_graphics_138 = new cjs.Graphics().p("Ai5JmIAAzLIFzAAIAATLg");
	var mask_5_graphics_139 = new cjs.Graphics().p("Ai5KQIAA0fIFzAAIAAUfg");
	var mask_5_graphics_140 = new cjs.Graphics().p("Ai5K5IAA1xIFzAAIAAVxg");
	var mask_5_graphics_141 = new cjs.Graphics().p("Ai5LiIAA3DIFzAAIAAXDg");
	var mask_5_graphics_142 = new cjs.Graphics().p("Ai5MLIAA4VIFzAAIAAYVg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AGJc5IAA5pIFzAAIAAZpg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(125).to({graphics:mask_5_graphics_125,x:76.425,y:108.35}).wait(1).to({graphics:mask_5_graphics_126,x:134.275,y:213.2}).wait(1).to({graphics:mask_5_graphics_127,x:134.275,y:217.6}).wait(1).to({graphics:mask_5_graphics_128,x:134.275,y:221.975}).wait(1).to({graphics:mask_5_graphics_129,x:134.275,y:226.35}).wait(1).to({graphics:mask_5_graphics_130,x:134.275,y:230.75}).wait(1).to({graphics:mask_5_graphics_131,x:134.275,y:235.15}).wait(1).to({graphics:mask_5_graphics_132,x:134.275,y:239.525}).wait(1).to({graphics:mask_5_graphics_133,x:134.275,y:243.9}).wait(1).to({graphics:mask_5_graphics_134,x:134.275,y:248.3}).wait(1).to({graphics:mask_5_graphics_135,x:134.275,y:252.675}).wait(1).to({graphics:mask_5_graphics_136,x:134.275,y:257.05}).wait(1).to({graphics:mask_5_graphics_137,x:134.275,y:261.425}).wait(1).to({graphics:mask_5_graphics_138,x:134.275,y:265.825}).wait(1).to({graphics:mask_5_graphics_139,x:134.275,y:270.225}).wait(1).to({graphics:mask_5_graphics_140,x:134.275,y:274.6}).wait(1).to({graphics:mask_5_graphics_141,x:134.275,y:278.975}).wait(1).to({graphics:mask_5_graphics_142,x:134.275,y:283.375}).wait(1).to({graphics:mask_5_graphics_143,x:76.425,y:184.9027}).wait(82));

	// 筆畫6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332F1F").s().p("AjYbDQA1hYBPg6QhqAbhoglQAwCMhmA5QiAgShEjnQg7jJACkpQABkZA0jRQA3jeBRgCQhBB5gYCDQA2igBYiVQAYANAWAPQgOgFAbBaQAjBwgWhbQE6iGC4gUQE9gkByDnQAdA9ArAoQAtApA2AOIggADIAqgBQA2ALA6gQIgSAAIheAFIgKgCQB0gPBRgTQglAUgmALQBKgEA8gtQgLAIgwAKQAWgMASgLQBAgsjOiMQhrhIiUhPQjeh2jkgsQjWgqkKAOQkAHqkUERQmeGZmZiFQgvAjhKhwQgdgtgSgvQgSgxAEgbQAUiCCTiIQBnhhCoheQBXgwDRhkQgLAFBWggQkKBujLCLQjoCghMCZQgTAlAHA9QAHA6AbA1QAdA3AnAXQAtAaAugYQENiQATgMQCZhaBshtQFBlDC0k1QiLATjEBHQBCgbAPgLQAQgMgrAIQEig+AbgwQjgBShBASQivAvh/gbQgdgKgjgQQhJggAUgPQBtBqC7glQBBgMBegiICSg1Qj/BOiBgGQjPgKhsi4QA0ArBDgKQhFgMBKgVQMFAFBZlgQhqADhzgMQjBgVAHg5QB6BSCSgJQh2gTg+gZQhggngwhJQAWgCCHABQBpABA+gLQC+gfAaigQhvAQiDgXQhGgLifgsQAhgWBcgkICphBQDUhYAHhRIgFkXQgFkKAEgLIgBgOQgFgHACgKQABAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAQgBhzA8gCQCegUBzEYQAsBqAZB6QAXBwgEBCQAmgJBQgJQBkgKBGAFQDPAOiaCFQg4AxhNAjQhYAkgpASQhHAegpAlQg1AwgfBPQA/gQBQAEQBUAEA3AZQA+AdgCAuQgCA3haBHQg1AqhEANQgSADhfAIQhAAFgjAUQgxAcggBGQERg9EggTQEwgUEIAeQDeAZBsAnQDPBLjFB5QhbA5iPADQhqADisgdQjCglhegOQiigXhnAMQi1ALhzARQjYAggoBQQD+goEoAVQE8AXEaBYQE4BiDbCkQD1C4BqD6QA6CIiDARQhnANjsg/QhggZk3hiQjfhHg4gBQAXBxAJCYQAKCugNCgQghGbioCFQhSBBhehcQgbgbgvg8Qgug7gUgTQg6g2jMCuQhMBAhFBKQhBBEgPAcQADhcA4hegAhGYVQhbAchdgSQBeAjBagtgACuQiQh1CGhvBHQAfgLBXgLQBfgMAqgLQCZgqgwiHIAljwQguB0h7CNgAkWNwQgOD1gBBSQCTg7AxgbQBpg9AuhVQACgBABgBQABAAAAAAQgBAAgCABQgCABgDABQANgNAAgRQinBBhfgoQhxgvBTi0QAAAmBSgKQArgGCMgkQCFghA+gGQBfgIAUAqQgchqAghhQAIgOAEgOQAMAeAFAiQgDgqgLggQADgagUgNQgcgvgxgRQAlASAbAoQhKgbkDA/Qj7BEgVgBQAECHgMDLgA1ROWQhgA1iGA+QB7gmBthAQBwhBBnhWQhgBHh5BDgABHOwIgGANIANgDQABAAACgFQgHgGgCAAIgBABgAoXKwQgIAfgDAZQAKgwANgzIgMArgAOqJsQgSgJhwgLQhwgLABAHQB2gBB7AZIAAAAgAs+HDQgnArgRAjQBBhJA5hJIhCBEgAkCIKQAaAVBVgqQg7AVg0AAgAgSG4QBfgvBlgUIAFgBQhaAIhvA8gAM3EEQg+gogygcIAVAPIgWgPQirhiirgqIC/BHQCLA+B9BLIAAAAgAEWATQCIAYCAA2QgzgahugmQiFgth5gcQlVhNg7ByQAhgCDrABQDEABgEgJgApcgRQA2gIAtgaQiwAoBNgGgATWieQAugEAdgQQgoAPgjAFgAjwtTIgYCDQAqiMgKAAQgCAAgGAJgAl+t1Qh7ACARADQAkAIBaADQBpACADgTIiAABgApRt7IgfgFQAVAIAKgDgACNvIQgCAHAMgKgAjS2uQAGDHgFBlQA7gPgYjhQgokMgHhdIALEtgAkIcgIgIA1QgFgRANgkgAjLP+QhDgGAEgyQAQATA+ANQA+AMA/gCQhGAPgvAAIgXgBgAAyPQQgeAchTAEQA4gNA5gTgAFPG3QAGACAHAEQAJAQAIAXIgDAKQgKgegRgZgAmaEwQgCgEAEgCQABABABAAQAAAAAAABQAAABAAAAQAAABgBABQgCAEABACIgCgFgAmXEdQgEgIAFgBQAHAQgFADQABgBgEgJgAzSAHQgGgBgEgGQACgDAFAEQAGAGADAAIgGAAgAzvgNQgNgBgCgIQAjgDgGASQgBgFgNgBgACGgNQASgKAHAEQgCgBgKAGQgEAEgEAAQgDAAgCgDgACngPQAAgDAGABQAGADACgCIgFADIgDABQgDAAgDgDgArxpBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQABAAABABQAAAAABABQAAAAABAAQAAAAABAAIgGABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAAAgBgAsGpGQAYgLgGAMIgHABQgGAAgFgCgAjq8jQgIgKAEgHQAOATAAAMQgBgEgJgKg");
	this.shape_5.setTransform(181.5786,191.7583);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(125).to({_off:false},0).wait(100));

	// 遮色片52 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_110 = new cjs.Graphics().p("AZrWBICkkdICIBPIilEcg");
	var mask_6_graphics_111 = new cjs.Graphics().p("AjMBSICgkeID5B7IifEeg");
	var mask_6_graphics_112 = new cjs.Graphics().p("AkDA9ICbkgIFsCnIibEgg");
	var mask_6_graphics_113 = new cjs.Graphics().p("Ak6AoICWkiIHfDTIiXEig");
	var mask_6_graphics_114 = new cjs.Graphics().p("AlxATICSkkIJRD/IiSEkg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AmogBICNkoILEErIiOEng");
	var mask_6_graphics_116 = new cjs.Graphics().p("AnfgWICJkqIM3FXIiKEqg");
	var mask_6_graphics_117 = new cjs.Graphics().p("AoXgrICFksIOpGDIiEEsg");
	var mask_6_graphics_118 = new cjs.Graphics().p("ApNhBICAktIQbGvIiAEug");
	var mask_6_graphics_119 = new cjs.Graphics().p("AJCQJIB8kwISPHcIh8Exg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_6_graphics_110,x:194.2717,y:148.7015}).wait(1).to({graphics:mask_6_graphics_111,x:366.4,y:277.425}).wait(1).to({graphics:mask_6_graphics_112,x:359.25,y:275.6}).wait(1).to({graphics:mask_6_graphics_113,x:352.1,y:273.8}).wait(1).to({graphics:mask_6_graphics_114,x:344.95,y:271.975}).wait(1).to({graphics:mask_6_graphics_115,x:337.8,y:270.15}).wait(1).to({graphics:mask_6_graphics_116,x:330.65,y:268.325}).wait(1).to({graphics:mask_6_graphics_117,x:323.5,y:266.525}).wait(1).to({graphics:mask_6_graphics_118,x:316.35,y:264.7}).wait(1).to({graphics:mask_6_graphics_119,x:186.8882,y:150.9509}).wait(106));

	// 筆畫52
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).wait(115));

	// 遮色片51 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_95 = new cjs.Graphics().p("ANwPSIC1llIEaCPIi1Flg");
	var mask_7_graphics_96 = new cjs.Graphics().p("AkOBXIC2lkIFmC3Ii1Fkg");
	var mask_7_graphics_97 = new cjs.Graphics().p("Ak0BDIC1ljIG0DeIi1Fkg");
	var mask_7_graphics_98 = new cjs.Graphics().p("AlbAvIC1ljIICEGIi1Fjg");
	var mask_7_graphics_99 = new cjs.Graphics().p("AmCAcIC2lkIJPEuIi2Fjg");
	var mask_7_graphics_100 = new cjs.Graphics().p("AmpAIIC2lkIKdFVIi2Fkg");
	var mask_7_graphics_101 = new cjs.Graphics().p("AnQgLIC2lkILrF7Ii2Fkg");
	var mask_7_graphics_102 = new cjs.Graphics().p("An2gfIC1lkIM5GiIi2Flg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AodgyIC1llIOGHKIi1Flg");
	var mask_7_graphics_104 = new cjs.Graphics().p("ApEhGIC1llIPUHyIi1Fkg");
	var mask_7_graphics_105 = new cjs.Graphics().p("AprhaIC2lkIQhIZIi2Fkg");
	var mask_7_graphics_106 = new cjs.Graphics().p("AqShuIC2lkIRvJBIi2Fkg");
	var mask_7_graphics_107 = new cjs.Graphics().p("Aq5iBIC2llIS8JoIi1Flg");
	var mask_7_graphics_108 = new cjs.Graphics().p("ArgiVIC2llIUKKQIi1Flg");
	var mask_7_graphics_109 = new cjs.Graphics().p("AFmK+IC1llIVZK4Ii1Flg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_7_graphics_95,x:134.3088,y:112.0855}).wait(1).to({graphics:mask_7_graphics_96,x:249.65,y:201.175}).wait(1).to({graphics:mask_7_graphics_97,x:253.85,y:203.15}).wait(1).to({graphics:mask_7_graphics_98,x:258.025,y:205.125}).wait(1).to({graphics:mask_7_graphics_99,x:262.25,y:207.1}).wait(1).to({graphics:mask_7_graphics_100,x:266.425,y:209.075}).wait(1).to({graphics:mask_7_graphics_101,x:270.625,y:211.05}).wait(1).to({graphics:mask_7_graphics_102,x:274.8,y:213.05}).wait(1).to({graphics:mask_7_graphics_103,x:278.975,y:215.025}).wait(1).to({graphics:mask_7_graphics_104,x:283.175,y:217}).wait(1).to({graphics:mask_7_graphics_105,x:287.35,y:218.975}).wait(1).to({graphics:mask_7_graphics_106,x:291.575,y:220.95}).wait(1).to({graphics:mask_7_graphics_107,x:295.75,y:222.925}).wait(1).to({graphics:mask_7_graphics_108,x:299.95,y:224.9}).wait(1).to({graphics:mask_7_graphics_109,x:190.8138,y:139.7533}).wait(116));

	// 筆畫51
	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).wait(130));

	// 遮色片5 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_85 = new cjs.Graphics().p("ALPO8IBHkLICqAuIhIEKg");
	var mask_8_graphics_86 = new cjs.Graphics().p("AiRBoIBHkKIDcA7IhHEKg");
	var mask_8_graphics_87 = new cjs.Graphics().p("AirBhIBIkKIEPBJIhIEKg");
	var mask_8_graphics_88 = new cjs.Graphics().p("AjEBaIBHkKIFDBXIhIEKg");
	var mask_8_graphics_89 = new cjs.Graphics().p("AjeBTIBHkJIF2BkIhHEJg");
	var mask_8_graphics_90 = new cjs.Graphics().p("Aj4BMIBIkKIGpBzIhIEKg");
	var mask_8_graphics_91 = new cjs.Graphics().p("AkRBFIBHkJIHcCAIhHEJg");
	var mask_8_graphics_92 = new cjs.Graphics().p("AkrA/IBHkKIIQCNIhHEKg");
	var mask_8_graphics_93 = new cjs.Graphics().p("AlFA4IBIkKIJDCbIhIEKg");
	var mask_8_graphics_94 = new cjs.Graphics().p("AHvNyIBHkLIJ3CpIhHELg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_8_graphics_85,x:95.9628,y:100.1103}).wait(1).to({graphics:mask_8_graphics_86,x:182.625,y:185.075}).wait(1).to({graphics:mask_8_graphics_87,x:185.325,y:185.475}).wait(1).to({graphics:mask_8_graphics_88,x:188.05,y:185.9}).wait(1).to({graphics:mask_8_graphics_89,x:190.75,y:186.325}).wait(1).to({graphics:mask_8_graphics_90,x:193.475,y:186.75}).wait(1).to({graphics:mask_8_graphics_91,x:196.175,y:187.175}).wait(1).to({graphics:mask_8_graphics_92,x:198.9,y:187.6}).wait(1).to({graphics:mask_8_graphics_93,x:201.6,y:188}).wait(1).to({graphics:mask_8_graphics_94,x:119.7198,y:105.0941}).wait(131));

	// 筆畫5
	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).wait(140));

	// 遮色片4 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_60 = new cjs.Graphics().p("AhuCQQgzgIgegfQgbgdgEgrQgEgqAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAugOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAggOAdQgTAmglAUQgQAJgpALQhTAWgjAGQgfAFgZAAQgSAAgQgDg");
	var mask_9_graphics_61 = new cjs.Graphics().p("AiRDaQgfAAgPgCQgagCgSgIQgkgOgVgiQgWgiACgmQACgmAZgfQAKgOAOgJQgFgOgCgRQgDgqAVgkQAUghAggOQASgIAcgDIAwgFQAVgDAbgIIAugPQAogMAYAAQAggBAdARQAdAQAQAcQARAbABAiQABAhgOAdIAAABIAbABQAZACATAIQAiANAWAgQAWAgAAAlQAAAlgWAgQgXAggiANQgTAHgYACQgPACgeAAg");
	var mask_9_graphics_62 = new cjs.Graphics().p("AhREtQg7gEgugNQgsgMgZgVQgbgXgLgkQgMgkAKgiQAEgMAFgLQgMgLgKgQQgWgiACgmQACglAZggQALgNANgKQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAwgFQAVgDAbgIIAugOQAogNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAACIAbABQAZACATAHQAiAOAWAgQAWAgAAAkQAAAdgOAaQAWASAMAYQARAkgIApQgIApgdAaQgaAXg1APQgiAJgqAFQglAEhJAAIgXABQg0AAgfgDg");
	var mask_9_graphics_63 = new cjs.Graphics().p("AiRGNQgzgDgigVQgcgTgPgfQgPgfADghQADghAVgcQALgQAOgLQgKgGgJgHQgbgXgLgkQgMgkAKgiQAEgMAFgLQgMgLgKgPQgWgiACgmQACgmAZggQALgOANgJQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAwgFQAVgDAbgIIAugOQAogNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAABIAbACQAZACATAHQAiAOAWAgQAWAgAAAlQAAAdgOAaQAWARAMAYQARAkgIApQgIApgdAaQgIAHgLAGQAJAKAIALQAVAhgBAmQAAAmgYAgQgXAggkAMQgcAKg/gBQhmgBhXAKQg6AGgZAAIgHAAg");
	var mask_9_graphics_64 = new cjs.Graphics().p("AizHyQgggFgbgVQgbgVgMgfQgMgeAFgiQAGgiAUgZQAMgPARgLIgBAAQgcgTgPgfQgPgfADghQADghAVgcQALgQAOgLQgKgGgJgHQgbgXgLgjQgMgkAKgiQAEgNAFgKQgMgMgKgPQgWgiACgmQACgmAZggQALgOANgJQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAwgFQAVgDAbgIIAugOQAogNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAABIAbACQAZACATAHQAiAOAWAgQAWAgAAAlQAAAdgOAaQAWARAMAZQARAkgIApQgIAogdAaQgIAHgLAGQAJAKAIALQAVAhgBAmQAAAmgYAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgYAigkAOQgSAHgaADIgsAEQgeADgzAHIhQALIhIAIIgwAIQgPACgNAAIgUgBg");
	var mask_9_graphics_65 = new cjs.Graphics().p("AiuJGQg7gSgigaQgugjgLgwQgHgeAKgeQAJgfAWgVQAIgHAJgGQgFgJgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgLIgBgBQgcgTgPgfQgPgfAEghQADghAUgbQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgNANgKQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAngNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBACIAbABQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVASAMAYQARAkgHApQgIApgdAaQgJAHgKAHQAJAJAHALQAWAggBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcQgeAlhKAYQhdAehgACIgPABQhbAAhTgag");
	var mask_9_graphics_66 = new cjs.Graphics().p("AhXKqIg/gBQgjgCgcgFQg3gLgfgaQgdgZgKgmQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgHAJgGQgFgJgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgLIgBgBQgcgTgPgfQgPgfAEggQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgNANgKQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAngNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBACIAbABQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVASAMAYQARAkgHApQgIApgdAaQgJAHgKAHQAJAJAHALQAWAhgBAmQgBAlgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAWAKAdQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEQg8AIhKACIhOABIg3gBg");
	var mask_9_graphics_67 = new cjs.Graphics().p("AiAMOQgfgCgZgEQgigHg1gVQg7gXgagYQgdgegGgsQgGgsAVglQAVgkAqgQQAOgGAPgCIgDgMQgLgmANgjQANgjAggYIADgCQgYgbgIghQgGgeAJgeQAKgfAWgVQAHgIAJgFQgFgJgEgKQgMgeAFgiQAGgiAUgZQAMgNARgLIgBgBQgcgTgPgfQgPgfADghQADghAVgcQALgQAOgLQgKgGgJgHQgbgXgLgkQgMgkAKgiQADgMAGgLQgNgMgJgPQgWgiACgmQACgmAZggQAKgNAOgKQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAwgFQAVgDAbgIIAtgOQApgNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAACIAbABQAZACATAHQAiAOAWAgQAWAgAAAlQAAAdgOAaQAWARAMAZQARAkgIApQgIApgdAaQgIAHgLAHQAJAJAIALQAVAhgBAmQAAAmgYAgIgEAFQAKAJAIALQAYAhAAAnQAAAngYAiQgOAUgTANIAKAFQAiASARAgQARAggDAmQgEAngXAcIgHAIQAXAVAJAeQAMAjgMAmQgLAlgcAYQgXASghAKQgZAIgmAEIgqAFIAGAHQAWAhgBAmQAAAmgXAgQgXAhgkANQgTAIgaACQgPABgfAAIhxABIg5gBg");
	var mask_9_graphics_68 = new cjs.Graphics().p("AjjNmQgfgCgagRQgbgRgQgaQgPgbgBgfQgCggANgcQALgYAVgTQglgRgTgSQgdgdgGgsQgGgtAVgkQAVgkAqgRQAOgGAPgCIgDgLQgLgmANgkQANgjAggXIADgCQgYgbgIghQgGgeAJgfQAKgeAWgWQAHgHAJgGQgFgJgEgJQgMgfAFggQAGgiAUgZQAMgPARgLIgBgBQgcgSgPgfQgPggADghQADghAVgcQALgPAOgLQgKgGgJgIQgbgWgLgkQgMgkAKgjQADgMAGgLQgNgLgJgQQgWgiACgmQACgmAZgfQAKgOAOgKQgFgOgCgRQgDgqAVgkQAUghAggOQASgIAcgDIAwgFQAVgDAbgIIAtgPQApgMAYAAQAggBAdARQAdAQAQAcQARAbABAiQABAhgOAdIAAABIAbABQAZACATAIQAiANAWAhQAWAgAAAlQAAAdgOAaQAWARAMAZQARAjgIApQgIApgdAaQgIAIgLAGQAJAJAIAMQAVAhgBAmQAAAlgYAgIgEAGQAKAIAIAMQAYAhAAAoQAAAngYAhQgOAUgTANIAKAEQAiASARAgQARAhgDAmQgEAmgXAcIgHAIQAXAWAJAdQAMAjgMAmQgLAmgcAXQgXATghAKQgZAHgmAFIgqAEIAGAIQAWAhgBAmQAAAlgXAhQgXAggkAOQgMAFgPACIABAFQAEAcgJAbQgJAbgTAUQgdAeg7ASQgsANgtAFIhBAEIgeADIgQABIgNgBg");
	var mask_9_graphics_69 = new cjs.Graphics().p("AjpPIIgsgBQgYgCgTgHQgjgNgXghQgWghAAgmQABgmAYghQAXggAkgNIAFgBIgJgNQgPgbgBgfQgCggANgcQALgZAVgSQglgRgTgSQgdgdgGgsQgGgtAVgkQAVgkAqgRQAOgGAPgCIgDgLQgLgmANgkQANgjAggXIADgCQgYgbgIghQgGgeAJgfQAKgeAWgVQAHgHAJgGQgFgJgEgJQgMgfAFghQAGgiAUgZQAMgPARgLIgBgBQgcgSgPgfQgPggADghQADghAVgcQALgQAOgKQgKgHgJgHQgbgWgLgkQgMgkAKgjQADgMAGgLQgNgLgJgQQgWgiACgmQACgmAZgfQALgOANgKQgFgOgCgRQgDgqAVgkQAUghAggOQASgIAcgDIAwgFQAVgDAbgIIAtgPQApgMAYAAQAggBAdARQAdAQAQAcQARAbABAiQABAhgOAdIAAABIAbABQAZACATAIQAiANAWAhQAWAgAAAlQAAAcgOAbQAWARAMAZQARAjgIApQgIApgdAaQgIAIgLAGQAJAJAIAMQAVAhgBAmQAAAlgYAgIgEAGQAKAIAIAMQAYAhAAAoQAAAngYAiQgOAUgTANIAKAEQAiASARAfQARAhgDAmQgEAmgXAcIgHAIQAXAWAJAdQAMAjgMAmQgLAmgcAXQgXATghAKQgZAHgmAFIgqAEIAGAIQAWAhgBAmQAAAlgXAhQgXAggkAOQgMAEgPADIABAFQAEAcgJAbQgJAbgTAUQgSASgcAOQAjAmAAA8QAAAngTAiQgUAkggAPQgTAJgbADQgQACgfAAg");
	var mask_9_graphics_70 = new cjs.Graphics().p("AkiQlQgogBgagNQgqgSgTgqQgTgqAMgsQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAFgCIgJgNQgPgagCggQgBggAMgbQAMgZAUgSQgkgRgTgSQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgCIgEgMQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgdAKgeQAJgfAWgVQAIgHAJgGQgFgJgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgLIgBgBQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgNANgKQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAagIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBACIAbABQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVASAMAYQARAkgHApQgIApgdAaQgIAHgLAHQAJAJAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAmgXAcIgHAIQAWAWAKAdQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgMAFgPADIABAFQADAbgJAbQgJAbgTAUQgRATgdANQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgZADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATQgmAZgkAKQgkALgpAAIgKgBg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AkuSPQgZgCgXgNQgrgDgegcQgcgZgJgmQgKgnAOgjQANgjAhgWQAVgPAYgFQgKgLgHgPQgTgqANgsQAIgfAYgXQATgTAYgJIgBgBQgWghAAgmQABgmAYggQAXghAkgMIAFgCIgJgNQgPgagBggQgCggANgbQALgZAVgSQglgRgTgSQgdgegGgsQgGgsAVglQAVgkAqgQQAPgGAOgCIgDgMQgLgmANgjQANgiAggYIADgCQgYgbgIghQgGgeAJgeQAKgfAWgVQAIgHAIgGQgFgJgEgKQgMgeAFgiQAGgiAUgZQANgOAQgLIgBgBQgcgTgPgfQgPgfADghQADghAVgcQALgQAPgLQgLgGgJgHQgbgXgLgkQgMgkAKgiQAEgMAFgLQgMgMgKgPQgWgiACgmQACgmAZggQALgNANgKQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAvgFQAVgDAbgIIAugOQApgNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAACIAbABQAZACATAHQAiAOAWAgQAWAgAAAlQAAAdgNAaQAVASAMAYQARAkgIApQgIApgdAaQgIAHgLAHQAJAJAIALQAVAhgBAmQAAAmgYAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgSANIAJAFQAiASARAgQARAggDAmQgEAngXAcIgHAIQAXAWAJAcQAMAjgMAmQgLAlgcAYQgXASghAKQgZAIgmAEIgqAFIAGAHQAWAhgBAmQAAAmgXAgQgXAhgkANQgMAFgOADIAAAFQAEAbgJAbQgJAbgTAUQgSATgcANQAjAnAAA7QAAAogTAiQgUAkghAPQgTAJgbADQgQACgeAAIgEAAQAIAfgJAhQgGAYgOASQgMAQgbATIgHAFQAHAOADAQQAJAmgOAiQgNAjggAVQgGALgJAKQgQATgXAKQgOARgVALQgdARgeAAIgNgBg");
	var mask_9_graphics_72 = new cjs.Graphics().p("AmKTFQgOABgOgBQgdgEgagPQgagPgQgYQgYgkAFgvQAGgvAggeQAigeAxgEQAOgCAOACQgDgcAKgaQAOgjAhgXQAVgPAXgEQgJgMgHgPQgTgqAMgsQAJgeAYgYQATgSAXgJIAAgBQgXghABgmQABgmAXghQAYggAkgNIAFgBIgJgNQgPgbgCgfQgBggAMgcQAMgZAUgSQgkgRgTgSQgegdgGgsQgGgtAVgkQAWgkApgRQAPgGAPgCIgEgLQgKglAMgkQANgjAggXIAEgDQgZgbgHggQgHgeAKgfQAJgeAWgWQAIgHAJgGQgFgJgEgJQgMgfAFghQAFgiAVgZQAMgPAQgLIgBgBQgcgSgPgfQgPggAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgWgLgkQgLgkAKgjQADgMAGgLQgNgLgKgQQgWgiACgmQADgmAYgfQALgOANgKQgFgOgBgRQgEgqAVgkQAVghAggOQASgIAbgDIAwgFQAUgDAbgIIAvgPQAogMAYAAQAggBAdARQAdAQARAcQAQAbABAiQACAhgOAdIgBABIAbABQAZACATAIQAjANAWAhQAWAggBAlQAAAcgNAaQAWASALAZQARAjgHApQgIApgdAaQgIAHgLAHQAJAJAHAMQAWAhgBAmQgBAlgXAgIgEAFQAKAJAIAMQAYAhAAAoQAAAngYAiQgOATgTANIAKAFQAhASASAgQARAhgEAmQgDAmgXAcIgHAIQAWAWAKAdQALAjgLAlQgLAmgdAXQgWATgiAKQgYAHgmAFIgqAEIAFAIQAXAhgBAmQgBAlgXAhQgXAggjAOQgMAEgPADIABAFQADAcgJAbQgJAbgTAUQgRASgdAOQAkAmAAA8QgBAngSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgZATIgIAFQAHAOAEARQAIAmgOAiQgNAigfAVQgGALgJAKQgRATgWAKQgOARgVAMIgLAFIgDAKQgIAbgVAVQgJARgOAOIgIAIQgKANgPAMQgfAZgmADIgKAAQggAAgdgQg");
	var mask_9_graphics_73 = new cjs.Graphics().p("Al3UwQglgEgdgYIgCAAIgTgCQgVAFgVgDQglgFgdgZQgcgZgKgjQgKgjALgkQAMglAcgXQAlgdAuACIAPABIANgCQgLgcAEgiQAGgvAggeQAhgeAxgEQAPgBANABQgCgcAKgaQANgjAhgXQAVgOAXgFQgJgMgHgPQgTgqANgsQAIgeAYgYQATgSAYgJIgBgBQgWghAAgmQABgmAYghQAXggAkgNIAFgBIgJgNQgPgbgBgfQgCggANgcQALgZAVgSQglgRgTgSQgdgdgGgsQgGgtAVgkQAVgjAqgRQAPgGAOgCIgDgLQgLgmANgkQANgjAggXIADgDQgYgagIghQgGgeAJgfQAKgeAWgWQAHgHAIgGQgEgJgEgJQgMgfAFghQAGgiATgZQAMgPARgLIgBgBQgcgSgOgfQgPggADghQADghAUgcQALgQAOgLQgKgGgJgHQgagWgLgkQgMgkAKgjQAEgMAFgLQgMgLgKgQQgWgiACgmQACgmAZgfQALgOANgKQgFgOgCgRQgDgqAUgkQAUghAggOQASgIAcgDIAwgFQAVgDAbgIIAugPQApgMAYAAQAggBAdARQAdAQAQAcQARAbABAiQABAhgOAdIAAABIAbABQAZACATAIQAiANAWAhQAWAgAAAlQAAAcgOAaQAWASAMAZQARAjgIApQgIApgdAaQgIAIgLAGQAJAJAIAMQAVAhgBAmQAAAlgYAgIgEAFQAKAJAIAMQAYAhAAAoQAAAngYAiQgOATgTANIAKAFQAiASARAgQARAhgDAmQgEAmgXAcIgHAIQAXAWAJAdQAMAjgMAmQgLAmgcAXQgXASghAKQgZAHgmAFIgqAEIAGAIQAWAhgBAmQAAAlgXAhQgXAggkAOQgMAEgPADIABAFQAEAcgJAbQgJAbgTAUQgSASgcAOQAjAmAAA8QAAAngTAiQgUAkghAPQgTAJgbADQgQACgfAAIgEAAQAIAfgJAhQgGAYgOASQgMAQgbATIgIAFQAIAOADARQAJAmgOAiQgNAiggAVQgGALgIAKQgQATgXAKQgOARgVAMIgLAFIgCAKQgJAcgVAUQgJARgOAOIgIAIQgIALgMAKIgCATQgHAngaAbIgLAJQgFATgMARQgHALgJAJIgEAGQgSAeggAPQgbANgcAAIgMAAg");
	var mask_9_graphics_74 = new cjs.Graphics().p("AnGVzQhPgUhEgqQgWgOgNgMQgUgTgJgcQgJgbAEgcQAEgcAQgYQAQgYAYgOQAYgOAdgEIADAAQAAgRAGgQQAMglAcgXQAlgdAuACIAPABIANgCQgMgcAEgiQAGgvAggeQAigeAxgEQAOgBAOABQgDgcAKgaQAOgjAhgXQAVgOAXgFQgJgMgHgPQgTgqAMgsQAJgeAYgYQATgSAXgJIAAgBQgXghABgmQABgmAXghQAYggAkgNIAEgBIgIgNQgPgbgCgfQgBggAMgcQAMgZAUgSQglgRgSgSQgegdgGgsQgGgsAVgkQAWgkApgRQAPgGAPgCIgEgLQgKgmAMgkQAMgjAggXIADgDQgYgagHghQgHgeAKgfQAJgeAWgWQAIgHAJgGQgGgJgDgJQgMgfAFghQAFgiAVgZQAMgPAQgLIgBgBQgcgSgPgfQgPggAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgWgLgkQgLgkAKgjQADgMAGgLQgNgLgKgQQgVgiACgmQACgmAYgfQALgOANgKQgFgOgBgRQgEgqAVgkQAVghAggOQASgIAcgDIAwgFQAUgDAbgIIAvgPQAogMAYAAQAggBAdARQAdAQARAcQAQAbABAiQACAhgOAdIgBABIAbABQAZACATAIQAjANAWAhQAWAggBAlQAAAcgNAaQAVASAMAZQARAjgHApQgIApgdAaQgJAIgLAGQAKAJAHAMQAWAhgBAmQgBAlgXAgIgEAFQAJAJAJAMQAYAhAAAoQAAAngYAiQgOATgTANIAKAFQAhASASAgQARAhgEAmQgDAmgXAcIgHAIQAWAWAKAdQALAjgLAmQgLAmgdAXQgWATgiAKQgYAHgmAFIgqAEIAFAIQAXAhgBAlQgBAlgXAhQgXAggjAOQgNAEgOADIABAFQADAcgJAbQgJAbgTAUQgRASgdAOQAkAmAAA8QgBAngSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEARQAIAmgOAiQgNAigfAVQgHALgIAKQgRATgWAKQgOARgUAMIgLAFIgDAKQgJAcgUAUQgJARgOAOIgIAIQgJALgLAKIgCATQgHAngbAbIgLAJQgFATgLARQgIALgJAJIgDAGQgTAeggAPIgDACQgDAPgGAOQgIATgMAOQgEAOgGANQgPAggcATQgWAQgbAEIgQABQgXAAgfgIg");
	var mask_9_graphics_75 = new cjs.Graphics().p("AmwXXQgggEgmgXIhCgqQgngWgTgNIgpgeQgmgegOgUQgVggABgoQABgoAXgfQAXgfAngMQAZgIAYABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADAAQABgRAFgRQAMgkAcgXQAlgdAuABIAPACIANgCQgMgdAEgiQAGgvAggdQAigfAxgEQAOgBAOACQgDgcAKgbQAOgjAhgWQAVgPAXgFQgJgLgHgPQgTgqAMgsQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAjgMIAFgCIgJgNQgPgagCggQgBggAMgbQAMgZAUgSQgkgRgSgRQgegegGgsQgGgsAVglQAWgkAogQQAPgGAPgCIgEgMQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgHAJgGQgFgJgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgLIgBgBQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgLgKgQQgWgiACgmQADgmAYggQALgNANgKQgFgOgBgRQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBACIAbABQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAWASALAYQARAkgHApQgIApgdAaQgIAHgLAHQAJAJAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAWAKAdQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAfQgXAhgjANQgMAFgPADIABAFQADAbgJAbQgJAbgTAUQgRATgdANQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEAQQAIAmgOAiQgNAjgfAVQgGALgJAKQgRATgWAKQgOARgVALIgLAGIgDAKQgIAbgVAVQgIARgOAOIgIAHQgJAMgLAKIgCATQgHAngbAaIgLAKQgFATgLAQQgHAMgJAIIgEAHQgTAdggAQIgDABQgCAQgHAOQgHASgNAPQgDANgHANQgPAggcAUQgSANgVAFQANAVAEAbQAGAogSAiQgSAiglATQgcAPgeAAIgRgCg");
	var mask_9_graphics_76 = new cjs.Graphics().p("AopYAQgIgDgkgWQgRgLgzgcQgrgYgXgQQglgagRgaQgVgiAEgqQADgqAageQAagdApgKQAQgDAQAAIAAgBQABgoAXgfQAXgeAmgNQAZgIAYACIABgHQAEgcARgYQAQgYAYgOQAYgOAcgEIADAAQABgQAFgRQAMglAcgXQAlgdAuACIAPACIANgDQgLgcAEgiQAGgvAggeQAhgeAxgEQAPgBANABQgCgcAKgaQANgjAhgXQAVgOAXgFQgJgMgHgPQgTgqANgsQAIgeAYgYQASgSAYgJIgBgBQgWghAAgmQABgmAYghQAXggAkgNIAFgBIgJgNQgPgbgBgfQgCggANgcQALgXAVgTQglgRgTgSQgdgdgGgsQgGgtAVgkQAVgkAqgRQAOgGAPgCIgDgLQgLgmANgkQANgjAggXIADgCQgYgbgIghQgGgeAJgfQAKgeAWgWQAHgHAJgGQgFgJgEgJQgMgfAFghQAGgiAUgZQAMgPARgLIgBgBQgcgSgPgfQgPggADghQADghAVgcQALgPAOgLQgKgGgJgIQgbgWgLgkQgMgkAKgjQADgMAGgLQgNgLgJgQQgWgiACgmQACgmAZgfQALgOANgKQgFgOgCgRQgDgqAVgkQAUghAggOQASgIAcgDIAwgFQAVgDAbgIIAugPQApgMAYAAQAggBAdARQAdAQAQAcQARAbABAiQABAhgOAdIAAABIAbABQAZACATAIQAiANAWAhQAWAgAAAlQAAAdgOAaQAWARAMAZQARAjgIApQgIApgdAaQgIAIgLAGQAJAJAIAMQAVAhgBAmQAAAlgYAgIgEAGQAKAIAIAMQAYAhAAAoQAAAngYAiQgOAUgTANIAKAEQAiASARAgQARAhgDAmQgEAmgXAcIgHAIQAXAWAJAdQAMAjgMAmQgLAmgcAXQgXATghAKQgZAHgmAFIgqAEIAGAIQAWAhgBAmQAAAlgXAhQgXAggkANQgMAFgPACIABAFQAEAcgJAbQgJAbgTAUQgSASgcAOQAjAnAAA7QAAAngTAiQgUAkghAPQgTAJgbADQgQACgfAAIgEAAQAIAfgJAhQgGAYgOASQgMAQgbATIgIAFQAHAOAEARQAJAmgOAiQgNAiggAVQgGAMgJAJQgRATgWAKQgOARgVAMIgLAFIgCAKQgJAcgVAVQgJAQgOAOIgIAIQgIALgMAKIgCATQgHAngZAbIgLAKQgGASgLARQgHALgJAJIgEAGQgSAeggAPIgEACQgCAPgGAOQgIATgNAOQgDAOgGANQgPAggcATQgTANgUAFQANAVAEAbQAFApgSAiQgSAigkASQglATgmgFIgQgDIgBAGQgJAlgaAaQgaAZgmAHQgMACgMAAQgYAAgWgKg");
	var mask_9_graphics_77 = new cjs.Graphics().p("ArbYUQgQgLgVgTIgjggIgfgbQgRgPgKgOQgRgZgDgeQgEgeALgcQALgbAXgVQAXgUAdgIQAcgIAeAGIAKACQAGgfAUgXQAageApgJQAQgEAQAAIAAAAQABgoAXgfQAXgfAmgMQAZgIAZABIAAgHQAEgbARgYQAQgYAYgPQAYgOAcgDIADgBQABgQAFgRQAMgkAcgXQAlgdAuABIAQACIANgDQgMgcAEgiQAGgvAggdQAhgfAxgEQAPgBAOABQgDgcAKgaQANgjAggWQAVgPAYgFQgKgMgHgOQgTgqANgsQAIgfAYgXQATgTAYgJIgBgBQgWghAAgmQABgmAYggQAXghAkgMIAFgCIgJgNQgPgagBggQgCggANgaQALgZAVgSQglgSgTgRQgdgegGgsQgGgsAVglQAVgkAqgQQAPgGAOgDIgDgLQgLgmANgjQANgjAggYIADgCQgYgbgIghQgGgeAJgeQAKgfAWgVQAHgIAJgGQgFgIgEgKQgMgeAFgiQAGgiAUgZQANgOAQgMIgBAAQgcgTgPgfQgPgfADghQADghAVgcQALgQAPgLQgLgGgJgHQgbgXgLgkQgMgkAKgiQAEgMAFgLQgMgMgKgPQgWgiACgmQACgmAZggQALgNANgKQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAwgFQAVgDAbgIIAugOQApgNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAABIAbACQAZACATAHQAiAOAWAgQAWAgAAAlQAAAdgNAaQAVARAMAZQARAkgIApQgIApgdAaQgIAHgLAGQAJAKAIALQAVAhgBAmQAAAmgYAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgSANIAJAFQAiASARAgQARAggDAmQgEAngXAcIgHAIQAXAVAJAeQAMAjgMAmQgLAlgcAYQgXASghAKQgZAIgmAEIgqAFIAGAHQAWAhgBAmQAAAmgXAgQgXAhgkANQgMAFgOACIAAAGQAEAagJAbQgJAbgTAUQgSASgcAOQAjAnAAA7QAAAogTAiQgUAkghAPQgTAJgbADQgQACgfAAIgEAAQAIAfgJAhQgGAYgOASQgMAQgbATIgHAFQAHAOADAQQAJAmgOAiQgNAjggAVQgGALgJAKQgQATgXAJQgOARgVAMIgKAGIgDAKQgJAbgVAVQgIAQgPAPIgIAHQgIAMgMAJIgCAUQgHAngaAaIgLAKQgFASgMARQgHALgJAJIgEAHQgRAdggAQIgDABQgDAPgGAPQgIASgNAOQgDAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAFAogSAiQgSAigkATQglASgmgFIgQgDIgBAHQgJAlgaAZQgaAZgmAHQglAHghgOQgIgDgkgWIgCgCQgBAKgCAKQgKAjgdAZQgdAaglAFIgRABQgrAAgrgcg");
	var mask_9_graphics_78 = new cjs.Graphics().p("AtQZGQgjgJgZgZQgUgVgIgZQgDgLgCgYQgIhPAWgqQAQggAhgSQAegQAhAAIACgGQALgbAXgVQAXgUAdgIQAcgIAeAGIAKACQAGgfAUgXQAageApgJQAQgEAQAAIAAAAQABgoAXgfQAXgfAmgMQAZgIAZABIAAgHQAEgbARgYQAQgYAYgPQAYgOAcgDIADAAQABgRAFgRQAMgkAcgXQAlgdAuABIAQACIANgCQgMgdAEgiQAGgvAggdQAhgfAxgEQAOgBAOACQgDgcAKgbQANgjAhgWQAVgPAYgFQgKgLgHgPQgTgqANgsQAIgfAYgXQATgTAYgJIgBgBQgWghAAgmQABgmAYggQAXghAkgMIAFgCIgJgNQgPgagBggQgCgfANgbQALgZAVgSQglgRgTgSQgdgegGgsQgGgsAVglQAVgkAqgQQAPgGAOgCIgDgMQgLgmANgjQANgjAggYIADgCQgYgbgIghQgGgeAJgeQAKgfAWgVQAIgHAIgGQgFgJgEgKQgMgeAFgiQAGgiAUgZQANgOAQgLIgBgBQgcgTgPgfQgPgfADghQADghAVgcQALgQAPgLQgLgGgJgHQgbgXgLgkQgMgkAKgiQAEgMAFgLQgMgMgKgPQgWgiACgmQACgmAZggQALgNANgKQgFgPgCgQQgDgrAVgjQAUgiAggOQASgIAcgDIAwgFQAVgDAbgIIAugOQApgNAYAAQAgAAAdAQQAdARAQAbQARAcABAhQABAhgOAdIAAACIAbABQAZACATAHQAiAOAWAgQAWAgAAAlQAAAdgNAaQAVASAMAYQARAkgIApQgIApgdAaQgIAHgLAHQAJAJAIALQAVAhgBAmQAAAmgYAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgSANIAJAFQAiASARAgQARAggDAmQgEAngXAcIgHAIQAXAWAJAdQAMAjgMAmQgLAlgcAYQgXASghAKQgZAIgmAEIgqAFIAGAHQAWAhgBAmQAAAmgXAgQgXAhgkANQgMAFgOADIAAAFQAEAbgJAaQgJAbgTAUQgSATgcANQAjAnAAA7QAAAogTAiQgUAkghAPQgTAJgbADQgQACgfAAIgEAAQAIAfgJAhQgGAYgOASQgMAQgbATIgHAFQAHAOADAQQAJAmgOAiQgNAjggAVQgGALgJAKQgQATgXAKQgOARgVALIgKAGIgDAKQgJAbgVAVQgIARgPAOIgIAHQgIAMgMAKIgCATQgHAngaAaIgLAKQgFATgMAQQgHAMgJAIIgEAHQgSAdggAQIgDABQgDAQgGAOQgIASgMAPQgDANgGANQgPAggcAUQgSAMgVAGQANAVAEAbQAFAogSAiQgSAigkATQglASgmgFIgQgDIgBAHQgJAlgaAZQgaAZgmAHQglAHghgOQgIgDgkgWIgCgBQgBAJgCAKQgKAjgdAZQgdAaglAFQg0AGgzghQgLgHgNgLQgFAegWAZQgYAdghAKQgSAGgTAAQgQAAgRgFg");
	var mask_9_graphics_79 = new cjs.Graphics().p("AuHY7QhegohBhNQgQgSgGgOQgMgZAAg3QAAgwAHgWQAMgmAjgZQAjgZAoACQAoACAhAbQAhAcAJAnIAEAPQACAJADAGQALATAdAIIAbAEIADgFQAQggAggSQAegRAhABIADgGQALgbAXgVQAXgUAcgIQAdgIAeAGIAJACQAGgfAVgXQAageApgJQAQgEAPAAIAAAAQABgoAXgfQAXgfAngMQAYgIAZABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADgBQAAgQAGgRQAMgkAcgXQAlgdAuABIAOACIANgDQgMgcAEgiQAGgvAggdQAigfAxgEQAOgBAOABQgDgcAKgaQAOgjAhgWQAVgPAXgFQgKgMgGgOQgTgqAMgsQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAEgCIgIgNQgPgagCggQgBgfAMgbQAMgZAUgSQglgSgSgRQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgDIgEgLQgKgmAMgjQANgjAggYIADgCQgYgbgHghQgHgeAKgeQAJgfAWgVQAIgIAJgGQgGgIgDgKQgMgeAFgiQAFgiAVgZQAMgOAQgMIgBAAQgcgTgPgfQgPgfAEghQADghAUgcQALgQAPgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgOANgJQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBABIAbACQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVARAMAZQARAkgHApQgIApgdAaQgJAHgLAGQAJAKAIALQAWAhgBAmQgBAmgXAgIgEAFQAJAJAJALQAYAiAAAnQAAAngYAiQgPAUgSANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAVAKAeQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgNAFgOACIABAGQADAbgJAaQgJAbgTAUQgRASgdAOQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEAQQAIAmgOAiQgNAjgfAVQgHALgIAKQgRASgWAKQgPARgUAMIgLAGIgDAKQgJAbgUAVQgJAQgOAPIgIAHQgJAMgLAJIgCAUQgHAngbAaIgLAKQgFASgLARQgIALgJAJIgDAHQgTAdggAQIgDABQgDAPgGAPQgIASgMAOQgEAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAGAogSAiQgSAiglATQgjASgngFIgQgDIgBAHQgIAlgaAZQgaAZgmAHQgmAHghgOQgHgDgkgWIgCgCQgBAKgDAKQgJAjgeAZQgdAagkAFQg0AGgzghQgLgHgNgMQgGAfgVAZQgYAdgiAKQghAKgkgJIgPgFQgLAIgNAFQgbAMgeABIgIAAQgyAAg3gYg");
	var mask_9_graphics_80 = new cjs.Graphics().p("At9Y7QhegohBhNQgQgSgGgOQgMgZAAg3QAAgoAFgWIgJgMQgUgiAEgqQAEgrAbgdIAegdQAJgJAOgUIAggtQAUgdANgPQAVgXAVgLQAkgUAsAJQArAJAbAfQAaAfAEAsQADArgUAkQgLATgbAhIgaAoQgQAZgNAOIgFAGQAFALADAMIAEAPQACAJADAGQALATAdAIIAbAEIADgFQAQggAggSQAegRAiABIACgGQALgbAXgVQAXgUAcgIQAdgIAeAGIAJACQAHgfAUgXQAageApgJQAQgEAPAAIAAAAQABgoAXgfQAXgfAngMQAZgIAYABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADgBQAAgQAGgRQAMgkAcgXQAlgdAtABIAPACIANgDQgMgcAEgiQAGgvAggdQAigfAxgEQAOgBAOABQgDgcAKgaQAOgjAhgWQAVgPAXgFQgJgMgHgOQgTgqAMgsQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAFgCIgJgNQgPgagCggQgBgfAMgbQAMgZAUgSQgkgSgTgRQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgDIgEgLQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgIAJgGQgFgIgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgMIgBAAQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgOANgJQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBABIAbACQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVARAMAZQARAkgHApQgIApgdAaQgJAHgKAGQAJAKAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAVAKAeQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgMAFgPACIABAGQADAbgJAaQgJAbgTAUQgRASgdAOQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEAQQAIAmgOAiQgNAjgfAVQgHALgIAKQgRASgWAKQgOARgVAMIgLAGIgDAKQgIAbgVAVQgJAQgOAPIgIAHQgJAMgLAJIgCAUQgHAngbAaIgLAKQgFASgLARQgIALgIAJIgEAHQgTAdggAQIgDABQgCAPgHAPQgIASgMAOQgEAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAGAogSAiQgSAiglATQgjASgngFIgPgDIgCAHQgIAlgaAZQgaAZgmAHQgmAHghgOQgHgDgkgWIgCgCQgBAKgDAKQgJAjgeAZQgdAagkAFQg0AGgzghQgLgHgNgMQgGAfgVAZQgYAdgiAKQghAKgkgJIgPgFQgLAIgNAFQgbAMgeABIgHAAQgyAAg4gYg");
	var mask_9_graphics_81 = new cjs.Graphics().p("At9Y7QhegohBhNQgQgSgGgOQgMgZAAg3QAAgoAFgWIgJgMQgUgiAEgqQAEgrAbgdIAegdQAJgJAOgUIAggtQAUgdANgPIAIgIQgCgQADgSQAHgqAdgcQAZgZAvgQQAbgKA4gPIAvgQQAdgLASgFQA5gPApAMQAiAKAZAdQAYAdAEAkQAEAjgQAiQgRAjgfASQgOAJgVAHIgmAKQhMAUgwATQABAmgSAhQgLATgbAhIgaAoQgQAZgNAOIgFAGQAFALADAMIAEAPQACAJADAGQALATAdAIIAbAEIADgFQAQggAggSQAegRAiABIACgGQALgbAXgVQAXgUAcgIQAdgIAeAGIAJACQAHgfAUgXQAageApgJQAQgEAPAAIAAAAQABgoAXgfQAXgfAngMQAZgIAYABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADgBQAAgQAGgRQAMgkAcgXQAlgdAtABIAPACIANgDQgMgcAEgiQAGgvAggdQAigfAxgEQAOgBAOABQgDgcAKgaQAOgjAhgWQAVgPAXgFQgJgMgHgOQgTgqAMgsQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAFgCIgJgNQgPgagCggQgBgfAMgbQAMgZAUgSQgkgSgTgRQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgDIgEgLQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgIAJgGQgFgIgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgMIgBAAQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgOANgJQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBABIAbACQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVARAMAZQARAkgHApQgIApgdAaQgJAHgKAGQAJAKAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAVAKAeQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgMAFgPACIABAGQADAbgJAaQgJAbgTAUQgRASgdAOQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEAQQAIAmgOAiQgNAjgfAVQgHALgIAKQgRASgWAKQgOARgVAMIgLAGIgDAKQgIAbgVAVQgJAQgOAPIgIAHQgJAMgLAJIgCAUQgHAngbAaIgLAKQgFASgLARQgIALgIAJIgEAHQgTAdggAQIgDABQgCAPgHAPQgIASgMAOQgEAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAGAogSAiQgSAiglATQgjASgngFIgPgDIgCAHQgIAlgaAZQgaAZgmAHQgmAHghgOQgHgDgkgWIgCgCQgBAKgDAKQgJAjgeAZQgdAagkAFQg0AGgzghQgLgHgNgMQgGAfgVAZQgYAdgiAKQghAKgkgJIgPgFQgLAIgNAFQgbAMgeABIgHAAQgyAAg4gYg");
	var mask_9_graphics_82 = new cjs.Graphics().p("At9Y7QhegohBhNQgQgSgGgOQgMgZAAg3QAAgoAFgWIgJgMQgUgiAEgqQAEgrAbgdIAegdQAJgJAOgUIAggtQAUgdANgPIAIgIQgCgQADgSQAHgqAdgcQAZgZAvgQQAbgKA4gPIAvgQIARgHQAAgYALgXQAPghAcgUQAJgGAngTQAbgOAYgPIBTgwQBAglAkgLQA9gTAxAUQAdAMATAaQAUAaAFAfQAEAfgLAeQgLAfgYAUQgWAUgwAUIg8AaQghAQgYAQIghAYQgVAPgNAHIgHAEQAAAcgNAbQgRAjgfASQgOAJgVAHIgmAKQhMAUgwATQABAmgSAhQgLATgbAhIgaAoQgQAZgNAOIgFAGQAFALADAMIAEAPQACAJADAGQALATAdAIIAbAEIADgFQAQggAggSQAegRAiABIACgGQALgbAXgVQAXgUAcgIQAdgIAeAGIAJACQAHgfAUgXQAageApgJQAQgEAPAAIAAAAQABgoAXgfQAXgfAngMQAZgIAYABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADgBQAAgQAGgRQAMgkAcgXQAlgdAtABIAPACIANgDQgMgcAEgiQAGgvAggdQAigfAxgEQAOgBAOABQgDgcAKgaQAOgjAhgWQAVgPAXgFQgJgMgHgOQgTgqAMgsQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAFgCIgJgNQgPgagCggQgBgfAMgbQAMgZAUgSQgkgSgTgRQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgDIgEgLQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgIAJgGQgFgIgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgMIgBAAQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgOANgJQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBABIAbACQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVARAMAZQARAkgHApQgIApgdAaQgJAHgKAGQAJAKAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAVAKAeQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgMAFgPACIABAGQADAbgJAaQgJAbgTAUQgRASgdAOQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEAQQAIAmgOAiQgNAjgfAVQgHALgIAKQgRASgWAKQgOARgVAMIgLAGIgDAKQgIAbgVAVQgJAQgOAPIgIAHQgJAMgLAJIgCAUQgHAngbAaIgLAKQgFASgLARQgIALgIAJIgEAHQgTAdggAQIgDABQgCAPgHAPQgIASgMAOQgEAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAGAogSAiQgSAiglATQgjASgngFIgPgDIgCAHQgIAlgaAZQgaAZgmAHQgmAHghgOQgHgDgkgWIgCgCQgBAKgDAKQgJAjgeAZQgdAagkAFQg0AGgzghQgLgHgNgMQgGAfgVAZQgYAdgiAKQghAKgkgJIgPgFQgLAIgNAFQgbAMgeABIgHAAQgyAAg4gYg");
	var mask_9_graphics_83 = new cjs.Graphics().p("At9Y7QhegohBhNQgQgSgGgOQgMgZAAg3QAAgoAFgWIgJgMQgUgiAEgqQAEgrAbgdIAegdQAJgJAOgUIAggtQAUgdANgPIAIgIQgCgQADgSQAHgqAdgcQAZgZAvgQQAbgKA4gPIAvgQIARgHQAAgYALgXQAPghAcgUQAJgGAngTQAbgOAYgPIBTgwQBAglAkgLQAcgJAZgBQAGgOAKgNQAVgcAggMQAZgJAogBIBDgCQAigDA2gRQBDgWAUgEIAtgIQAegFAPgDIAkgIQAUgFAPAAIAPAAQAAgTAFgTQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAFgCIgJgNQgPgagCggQgBgfAMgbQAMgZAUgSQgkgSgTgRQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgDIgEgLQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgIAJgGQgFgIgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgMIgBAAQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgOANgJQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBABIAbACQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVARAMAZQARAkgHApQgIApgdAaQgJAHgKAGQAJAKAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAVAKAeQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgMAFgPACIABAGQADAbgJAaQgJAbgTAUQgRASgdAOQAkAnAAA7QgBAogSAiQgUAkgiAPQgTAJgaADQgRACgfAAIgEAAQAJAfgJAhQgGAYgPASQgMAQgaATIgIAFQAHAOAEAQQAIAmgOAiQgNAjgfAVQgHALgIAKQgRASgWAKQgOARgVAMIgLAGIgDAKQgIAbgVAVQgJAQgOAPIgIAHQgJAMgLAJIgCAUQgHAngbAaIgLAKQgFASgLARQgIALgIAJIgEAHQgTAdggAQIgDABQgCAPgHAPQgIASgMAOQgEAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAGAogSAiQgSAiglATQgjASgngFIgPgDIgCAHQgIAlgaAZQgaAZgmAHQgmAHghgOQgHgDgkgWIgCgCQgBAKgDAKQgJAjgeAZQgdAagkAFQg0AGgzghQgLgHgNgMQgGAfgVAZQgYAdgiAKQghAKgkgJIgPgFQgLAIgNAFQgbAMgeABIgHAAQgyAAg4gYgAjYLyQgWAUgwAUIg8AaQghAQgYAQIghAYQgVAPgNAHIgHAEQAAAcgNAbQgRAjgfASQgOAJgVAHIgmAKQhMAUgwATQABAmgSAhQgLATgbAhIgaAoQgQAZgNAOIgFAGQAFALADAMIAEAPQACAJADAGQALATAdAIIAbAEIADgFQAQggAggSQAegRAiABIACgGQALgbAXgVQAXgUAcgIQAdgIAeAGIAJACQAHgfAUgXQAageApgJQAQgEAPAAIAAAAQABgoAXgfQAXgfAngMQAZgIAYABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADgBQAAgQAGgRQAMgkAcgXQAlgdAtABIAPACIANgDQgMgcAEgiIACgMQgsAMgcAFQg2AKg1AAQgTAAgRgCQgLAZgVASg");
	var mask_9_graphics_84 = new cjs.Graphics().p("At9Y7QhegohBhNQgQgSgGgOQgMgZAAg3QAAgoAFgWIgJgMQgUgiAEgqQAEgrAbgdIAegdQAJgJAOgUIAggtQAUgdANgPIAIgIQgCgQADgSQAHgqAdgcQAZgZAvgQQAbgKA4gPIAvgQIARgHQAAgYALgXQAPghAcgUQAJgGAngTQAbgOAYgPIBTgwQBAglAkgLQAcgJAZgBQAGgOAKgNQAVgcAggMQAZgJAogBIBDgCQAigDA2gRQBDgWAUgEIAtgIQAegFAPgDIAkgIQAUgFAPAAIAPAAQAAgTAFgTQAJgfAYgXQATgTAXgJIAAgBQgXghABgmQABgmAXggQAYghAkgMIAFgCIgJgNQgPgagCggQgBgfAMgbQAMgZAUgSQgkgSgTgRQgegegGgsQgGgsAVglQAWgkApgQQAPgGAPgDIgEgLQgKgmAMgjQANgjAggYIAEgCQgZgbgHghQgHgeAKgeQAJgfAWgVQAIgIAJgGQgFgIgEgKQgMgeAFgiQAFgiAVgZQAMgOAQgMIgBAAQgcgTgPgfQgPgfAEghQADghAUgcQAMgQAOgLQgLgGgIgHQgcgXgLgkQgLgkAKgiQADgMAGgLQgNgMgKgPQgWgiACgmQADgmAYggQALgOANgJQgFgPgBgQQgEgrAVgjQAVgiAggOQASgIAcgDIAwgFQAUgDAbgIIAvgOQAogNAYAAQAgAAAdAQQAdARARAbQAQAcABAhQACAhgOAdIgBABIAbACQAZACATAHQAjAOAWAgQAWAggBAlQAAAdgNAaQAVARAMAZQARAkgHApQgIApgdAaQgJAHgKAGQAJAKAHALQAWAhgBAmQgBAmgXAgIgEAFQAKAJAIALQAYAiAAAnQAAAngYAiQgOAUgTANIAKAFQAhASASAgQARAggEAmQgDAngXAcIgHAIQAWAVAKAeQALAjgLAmQgLAlgdAYQgWASgiAKQgYAIgmAEIgqAFIAFAHQAXAhgBAmQgBAmgXAgQgXAhgjANQgMAFgPACIABAGQADAbgJAaQgJAbgTAUQgRASgdAOQAkAnAAA7QgBAogSAiIgJANIAOABQAtAGAcASQAhAVAQAkQAQAlgHAmQgHAlgdAcQgdAdglAFQgYAEgqgGQg8gIgUgBIgjgBQgUgBgOgEQgOgEgMgGQAIAmgOAhQgNAjgfAVQgHALgIAKQgRASgWAKQgOARgVAMIgLAGIgDAKQgIAbgVAVQgJAQgOAPIgIAHQgJAMgLAJIgCAUQgHAngbAaIgLAKQgFASgLARQgIALgIAJIgEAHQgTAdggAQIgDABQgCAPgHAPQgIASgMAOQgEAOgGANQgPAggcAUQgSAMgVAFQANAWAEAbQAGAogSAiQgSAiglATQgjASgngFIgPgDIgCAHQgIAlgaAZQgaAZgmAHQgmAHghgOQgHgDgkgWIgCgCQgBAKgDAKQgJAjgeAZQgdAagkAFQg0AGgzghQgLgHgNgMQgGAfgVAZQgYAdgiAKQghAKgkgJIgPgFQgLAIgNAFQgbAMgeABIgHAAQgyAAg4gYgAjYLyQgWAUgwAUIg8AaQghAQgYAQIghAYQgVAPgNAHIgHAEQAAAcgNAbQgRAjgfASQgOAJgVAHIgmAKQhMAUgwATQABAmgSAhQgLATgbAhIgaAoQgQAZgNAOIgFAGQAFALADAMIAEAPQACAJADAGQALATAdAIIAbAEIADgFQAQggAggSQAegRAiABIACgGQALgbAXgVQAXgUAcgIQAdgIAeAGIAJACQAHgfAUgXQAageApgJQAQgEAPAAIAAAAQABgoAXgfQAXgfAngMQAZgIAYABIABgHQAEgbAQgYQAQgYAYgPQAYgOAdgDIADgBQAAgQAGgRQAMgkAcgXQAlgdAtABIAPACIANgDQgMgcAEgiIACgMQgsAMgcAFQg2AKg1AAQgTAAgRgCQgLAZgVASg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_9_graphics_60,x:169.1073,y:1.4356}).wait(1).to({graphics:mask_9_graphics_61,x:173.6922,y:8.4993}).wait(1).to({graphics:mask_9_graphics_62,x:175.2815,y:17.1034}).wait(1).to({graphics:mask_9_graphics_63,x:175.2815,y:26.4305}).wait(1).to({graphics:mask_9_graphics_64,x:175.2815,y:36.6435}).wait(1).to({graphics:mask_9_graphics_65,x:175.8215,y:47.5095}).wait(1).to({graphics:mask_9_graphics_66,x:175.3228,y:55.0076}).wait(1).to({graphics:mask_9_graphics_67,x:170.2958,y:65.0243}).wait(1).to({graphics:mask_9_graphics_68,x:170.2958,y:73.8618}).wait(1).to({graphics:mask_9_graphics_69,x:169.587,y:83.5743}).wait(1).to({graphics:mask_9_graphics_70,x:166.7145,y:92.9076}).wait(1).to({graphics:mask_9_graphics_71,x:163.1663,y:103.5083}).wait(1).to({graphics:mask_9_graphics_72,x:155.7121,y:110.4937}).wait(1).to({graphics:mask_9_graphics_73,x:148.2799,y:119.5807}).wait(1).to({graphics:mask_9_graphics_74,x:142.4282,y:127.0776}).wait(1).to({graphics:mask_9_graphics_75,x:135.7076,y:136.4025}).wait(1).to({graphics:mask_9_graphics_76,x:129.2875,y:141.3632}).wait(1).to({graphics:mask_9_graphics_77,x:121.3703,y:145.1271}).wait(1).to({graphics:mask_9_graphics_78,x:115.2672,y:147.807}).wait(1).to({graphics:mask_9_graphics_79,x:99.9375,y:148.6314}).wait(1).to({graphics:mask_9_graphics_80,x:98.922,y:148.6314}).wait(1).to({graphics:mask_9_graphics_81,x:98.922,y:148.6314}).wait(1).to({graphics:mask_9_graphics_82,x:98.922,y:148.6314}).wait(1).to({graphics:mask_9_graphics_83,x:98.922,y:148.6314}).wait(1).to({graphics:mask_9_graphics_84,x:98.922,y:148.6314}).wait(141));

	// 筆畫4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332F1F").s().p("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");
	this.shape_6.setTransform(181.5786,191.7583);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(60).to({_off:false},0).wait(165));

	// 遮色片3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_35 = new cjs.Graphics().p("AhDBoQgigWgOgpQgPgoANgmQAMgmAjgZQAkgZAnACQAoACAiAbQAhAbAJAoQAIAggLAhQgLAigZAWQgfAagrADIgJABQglAAgdgUg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AggC3QgpgRgVgqQgTgkAFglQgRgFgOgKQgigWgOgoQgPgoANgnQAMgmAjgZQAkgZAoACQAmACAfAZIAMgHQAYgMAcgBQAcgBAZALQAZALATAVQASAVAIAbQAFASABAbQABApgMAdQgGAQgQAVQgOATgMALIgBABQgEAXgMAVQgXAlgtAPQgVAHgUAAQgWAAgVgJg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ABJDhQgkgIgZgZIgKgLQgPAMgUAGQgtAPgpgRQgogQgWgqQgTglAFglQgQgFgPgKQghgWgPgnQgOgpAMgmQANgnAjgYQAjgZApACQAmABAgAZIALgGQAZgNAcAAQAbgBAZALIAKAFQAMgbAZgUQAagUAegFQAfgFAeAMQAeALAUAXQAZAeAHAsQAGAkgGAtQgLBggpBIQgkA/gyATQgUAIgVAAQgOAAgOgDg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AgGDoQglgIgZgZIgKgLQgQAMgUAHQgtAOgogQQgpgRgVgqQgTgkAFgmQgRgEgOgKQgigWgOgoQgPgoANgnQAMgmAjgZQAkgZAoACQAmACAgAZIAMgHQAYgMAcgBQAcgBAZALIAKAFQANgbAYgUQAZgTAfgFQAegFAfALQAPAGAOAJIABgBQAWgVAdgKQAdgJAeAGQAfAFAYASQAYASAOAcQANAcgBAeQAAAQgGAYIgJAoIgEApQgCAagEAQQgHAYgVAfQg0BRg8AQQgmALgngPIgPgHQgVAUgXAJQgVAHgVAAQgNAAgNgDg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AhID+QgkgIgZgZIgKgLQgQALgUAHQgtAPgpgRQgogQgWgqQgTglAFglQgQgFgPgKQghgWgPgoQgOgoAMgmQANgnAjgYQAjgZApACQAmABAgAZIALgGQAZgNAcAAQAcgBAZALIAKAFQAMgcAZgTQAagUAegFQAegFAeAMQAQAFANAKIABgBQAXgWAcgJQAdgJAfAFIAHACQAMgPAPgKQAbgSAhgDQAhgDAeANQAdANAVAaQAUAbAFAfQACAMABAWQABAlgBAeQAAAagFAUQgIAfgYAZQAAAOgEAOQgIAigXAXQgcAegqAGQgkAGgfgNQgpAygtANQgmAKgogPIgOgGQgVATgXAJQgUAIgVAAQgOAAgOgDg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AiWEEQgkgIgZgZIgKgKQgQALgUAHQgtAOgpgQQgogRgWgqQgSgkAFglQgRgFgPgKQghgWgPgpQgOgnAMgnQANgmAjgZQAjgZApACQAmACAgAZIALgHQAZgMAcgBQAcgBAZALIAKAFQAMgbAZgUQAagTAegFQAfgFAeALQAQAGAMAJIABgBQAXgVAcgKQAdgJAfAGIAHABQAMgOAPgLQAbgSAhgDQAhgCAeANQALAFALAHQAJgJALgHQAagRAegDQAdgDAdAMQAcALAUAXQATAWAHAeQAIAegHAdIgJAhIgDAdQgDAggQAbQgRAdgbARQgaASghADQgeAEgbgLIgDARQgIAhgXAYQgcAdgqAHQgkAFgegMQgqAygtAMQgmALgngPIgOgHQgVAUgYAJQgUAIgVAAQgNAAgPgEg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AjTEvQglgIgZgZIgJgKQgQALgVAHQgtAOgogQQgpgRgVgqQgTgkAFglQgRgFgOgKQgigWgOgpQgPgoANgmQAMgmAjgZQAkgZAoACQAmACAhAZIALgHQAYgMAcgBQAcgBAZALIAKAFQANgbAZgUQAZgTAfgFQAegFAfALQAQAGANAJIABgBQAWgVAdgKQAcgJAeAGIAIABQALgOAQgLQAagSAigDQAhgCAdANQAMAFAKAHQAJgJAMgHQAagRAdgDIARAAIAAgBQALgiAdgYQAegYAjgDQAkgEAhASQAiASARAgQAPAdACAtQACAagCA1IAABEQgBAmgMAaQgPAighAVQgiAVglgCQghgCgcgTIgHAFQgbASggADQgeAEgbgLIgDARQgIAhgXAYQgcAdgrAHQgjAFgfgMQgpAygtAMQgmALgngPIgPgHQgUAUgYAJQgUAIgWAAQgNAAgOgEg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AkhEvQgkgIgZgZIgKgKQgQALgUAHQgtAOgpgQQgogRgWgqQgTgkAGglQgRgFgPgKQghgWgPgpQgOgoAMgmQANgmAjgZQAjgZApACQAmACAgAZIALgHQAZgMAcgBQAcgBAZALIAKAFQAMgbAZgUQAagTAegFQAfgFAeALQAQAGANAJIABgBQAXgVAcgKQAdgJAfAGIAHABQAMgOAOgLQAbgSAhgDQAhgCAeANQALAFALAHQAJgJALgHQAagRAegDIAQAAIAAgBQALgiAegYQAdgYAkgDQAkgEAhASQAKAGAIAGQASgOAWgHQAggKAiAHQAjAIAZAWQAZAXAJAiQAKAigJAgIgGAWQgBAIABAdQAAAbgLAaQgMAagVARQgUASgcAIQgbAIgbgEIgIgCIgEALQgPAigiAVQghAVglgCQghgCgcgTIgIAFQgaASghADQgeAEgbgLIgDARQgIAhgXAYQgcAdgqAHQgkAFgegMQgpAygtAMQgmALgogPIgOgHQgVAUgYAJQgUAIgVAAQgOAAgOgEg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AlhE+QgkgIgZgZIgKgLQgQAMgUAGQgtAPgpgRQgogQgWgqQgTgkAFgmQgQgFgPgKQghgWgPgoQgOgpAMgmQANgmAjgYQAjgZApACQAmABAgAZIALgGQAZgNAcAAQAcgBAZALIAKAFQAMgbAZgUQAagUAegFQAfgFAeAMQAQAGANAJIABgBQAXgWAcgJQAdgJAfAFIAHACQAMgPAPgKQAbgSAggDQAhgDAeANQALAGAKAHQAKgJALgIQAagRAegDIAQAAIAAgBQALgiAegYQAdgXAkgEQAkgDAhASQAJAFAJAHQASgOAWgHQAggKAiAHIANADQAHgGAIgGQAZgSAfgEQAegEAeAKQAeALAVAXQAUAWAIAfQAJAfgHAdQgDAMgHAYIgHAkQgEAXgFANQgLAggaAXQgbAWgiAFQgcAFgbgJIgBAAQgUASgcAIQgbAHgbgEIgIgBIgEALQgPAigiAVQghAUglgCQgigBgcgUIgHAFQgaASghAEQgeADgbgKIgDAQQgIAigXAXQgcAegqAGQgjAGgfgNQgpAygtANQgmAKgogPIgOgGQgVATgYAJQgUAIgVAAQgOAAgOgDg");
	var mask_10_graphics_44 = new cjs.Graphics().p("Am4FEQgkgIgZgZIgKgLQgQAMgUAGQgtAPgpgRQgogQgWgqQgTglAFglQgQgFgPgKQghgWgPgoQgOgpAMgmQANgmAjgYQAjgZApACQAmABAgAZIALgGQAZgNAcAAQAcgBAZALIAKAFQAMgbAZgUQAagUAegFQAfgFAeAMQAQAGANAJIABgBQAXgWAcgJQAdgJAfAFIAHACQAMgPAPgKQAbgSAhgDQAhgDAeANQALAGAJAHQAKgJALgIQAagRAegDIAQAAIAAgBQALgiAegYQAdgXAkgEQAkgDAhASQAKAFAIAHQASgOAWgHQAggKAiAHIANADQAHgGAIgGQAZgSAfgEQAegEAeAKQAWAJARAOIAIgIQAagZAigHQAigHAiANQAiANAUAcQAWAdAFArQAEAfgFAvQgCAUgDANQgIAZgXAZQgkAlgtALQgyANgrgVIgNgHIgOANQgbAXgiAFQgcAFgbgJIgBAAQgUASgcAIQgbAHgbgEIgIgBIgEALQgPAigiAVQghAUglgCQghgBgdgUIgHAFQgaASghAEQgeADgbgKIgDAQQgIAigWAXQgcAegqAGQgkAGgfgNQgpAygtANQgmAKgogPIgOgGQgVATgYAJQgUAIgVAAQgOAAgOgDg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AoGFMQglgIgZgZIgJgLQgQALgVAHQgtAPgogRQgpgQgVgqQgTglAFglQgQgFgPgKQgigWgOgoQgPgpANgmQAMgmAjgYQAkgZAoACQAnABAgAZIALgGQAYgNAcAAQAcgBAZALIAKAFQANgcAZgTQAZgUAfgFQAegFAfAMQAQAGANAJIABgBQAWgWAdgJQAdgJAeAFIAIACQAMgPAPgKQAagSAigDQAhgDAdANQAMAFAKAIQAJgJAMgIQAagRAcgDIARAAIAAgBQALgiAdgYQAegXAjgEQAkgDAhASQAKAFAJAHQASgOAVgHQAhgKAiAHIANADQAGgGAIgGQAagSAegEQAfgEAdAKQAXAIARAPIAHgIQAagZAigHQAigHAiANQAOAGAMAHQARgSAXgKQAZgKAcABQAcABAYANQAZAMARAXQARAXAFAaQAEATAAAWQABAagBAiQgBAmgFASQgHAagSAVQgSAVgYALQgYAKgcAAQgbAAgYgKQgTgIgOgOQgeAYgkAKQgzANgrgWIgMgGIgPANQgbAXghAFQgcAEgcgIIAAAAQgVASgbAIQgbAHgbgEIgIgBIgFALQgPAighAVQgiAUglgCQghgBgcgUIgHAFQgbASggAEQgdADgbgKIgDAQQgIAigXAXQgcAegrAGQgjAGgfgNQgpAyguANQgmAKgngPIgPgGQgUATgYAJQgUAIgVAAQgOAAgOgDg");
	var mask_10_graphics_46 = new cjs.Graphics().p("ApYFpQglgIgZgZIgKgLQgQALgUAHQgtAPgogRQgpgQgVgqQgTglAFglQgRgFgOgKQgigWgOgoQgPgpANgmQAMgnAjgXQAkgZAoACQAmABAgAZIAMgGQAYgNAcAAQAcgBAZALIAKAFQANgcAZgTQAZgUAfgFQAegFAfAMQAPAFAOAKIABgBQAWgWAdgJQAdgJAeAFIAIACQALgPAQgKQAagSAigDQAhgDAdANQAMAFAKAIQAJgKAMgHQAagRAdgDIAQAAIABgBQALgiAdgYQAdgXAjgEQAkgDAhASQAKAFAIAGQATgOAVgGQAhgKAiAHIAMADQAHgGAIgGQAagSAegEQAfgEAdAKQAWAIASAPIAHgIQAagZAigHQAigHAiANQAOAFAMAIQARgSAXgKQAZgKAcABQAXABATAIQAMgWAVgRQAagVAggFQAggFAfAMQAgANAUAZQASAYAIAiQAHAaACAnQADAwgBApQgBAqgHAXQgMAmgiAXQgiAZgoAAQgogBghgaIgLgJQgMAKgOAHQgYALgcAAQgbAAgYgLQgTgIgPgOQgdAZgkAKQgzANgrgWIgNgIIgOAPQgbAXghAFQgcAEgcgJIAAABQgVASgbAIQgbAHgbgEIgJgCIgEAMQgPAighAVQgiAUglgCQghgCgbgTIgHAFQgbASggAEQgfADgagKIgDAQQgIAigXAXQgcAegrAGQgkAGgegNQgpAyguANQgmAKgngPIgPgGQgVATgXAJQgVAIgVAAQgNAAgOgDg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AqmFpQgkgIgZgZIgKgLQgQALgUAHQgtAPgpgRQgogQgWgqQgSglAFglQgRgFgPgKQghgWgPgoQgOgpAMgmQANgnAjgXQAjgZApACQAmABAgAZIALgGQAZgNAcAAQAcgBAZALIAKAFQAMgcAZgTQAagUAegFQAfgFAeAMQAQAFANAKIABgBQAXgWAcgJQAdgJAfAFIAHACQAMgPAPgKQAbgSAhgDQAhgDAeANQALAFALAIQAJgKALgHQAagRAegDIAQAAIAAgBQALgiAegYQAdgXAkgEQAjgDAhASQAKAFAIAGQASgOAWgGQAggKAiAHIANADQAHgGAIgGQAZgSAfgEQAegEAeAKQAWAIARAPIAIgIQAagZAigHQAigHAiANQAOAFALAIQASgSAWgKQAZgKAdABQAWABAUAIQAMgWAUgRQAagVAggFQAggFAgAMQAZAKASATQAdgVAjgCQAogCAjAZQAjAYANAmQAHAWABAiIABA6IADAqQACAZgCARQgFAggUAaQgUAZgeAMQgdAMghgEQghgEgZgTIgBgBIgLAIQgiAZgoAAQgogBgigaIgKgJQgMAKgPAHQgYALgbAAQgcAAgYgLQgSgIgPgOQgeAZgkAKQgyANgrgWIgNgIIgOAPQgbAXgiAFQgcAEgbgJIgBABQgUASgcAIQgbAHgbgEIgIgCIgEAMQgPAigiAVQghAUgkgCQghgCgcgTIgIAFQgaASghAEQgeADgbgKIgDAQQgIAigXAXQgcAegqAGQgkAGgegNQgqAygtANQgmAKgogPIgOgGQgVATgYAJQgUAIgVAAQgOAAgOgDg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AruFyQglgIgZgZIgKgKQgQALgUAHQgtAOgogQQgpgRgVgqQgTgkAFglQgRgFgOgKQgigWgOgpQgPgoANgnQAMgmAjgYQAkgZAoACQAmACAgAZIAMgHQAYgMAcgBQAcgBAZALIAKAFQANgbAZgUQAZgTAfgFQAegFAfALQAPAGAOAJIABgBQAWgVAdgKQAdgJAeAGIAIABQALgOAQgLQAagSAigDQAhgCAdANQAMAFAKAHQAJgJAMgHQAagRAdgDIAQAAIABgBQALgiAdgYQAegYAjgDQAkgEAhASQAKAGAIAGQATgOAUgHQAhgKAiAHIAMAEQAHgHAIgFQAagTAegEQAfgEAdALQAWAIASAPIAHgIQAagaAigGQAigHAiANQAOAFAMAIQARgSAXgKQAZgLAcACQAWABAUAIQAMgWAVgRQAagVAggGQAggFAfANQAZAKASASQAdgUAjgCQAfgCAdAPQAHgJAJgIQAggcAogCQAogDAjAXQAkAYANAlQAJAXABAgIgBA4IABAoQABAZgBAPQgCAvgRAeQgTAggkARQgkARgmgHQgXgEgTgMQgOAMgRAHQgdANghgEQghgFgagTIgBgBIgLAJQgiAZgogBQgoAAghgaIgLgJQgMAKgOAGQgYALgcABQgbAAgYgLQgTgJgPgOQgeAagjAKQgzANgrgWIgNgIIgOAOQgbAXghAFQgcAFgcgJIAAAAQgVASgbAIQgbAIgbgEIgJgCIgEALQgPAiggAVQgiAVglgCQghgCgcgTIgHAFQgbASggADQgfAEgagLIgDARQgIAhgXAYQgcAdgrAHQgkAFgegMQgpAyguAMQgmALgngPIgPgHQgVAUgXAJQgVAHgVAAQgNAAgOgDg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AtIF6QgkgIgZgZIgKgKQgQALgUAHQgtAOgpgQQgogRgWgqQgTgkAGglQgRgFgPgKQghgWgPgpQgOgoAMgnQANgmAjgYQAjgZApACQAmACAgAYIALgGQAZgMAcgBQAcgBAZALIAKAFQAMgbAZgUQAagTAegFQAfgFAeALQAQAGANAJIABgBQAXgVAcgKQAdgJAfAGIAHABQAMgOAPgLQAbgSAhgDQAhgCAeANQALAFALAHQAJgJALgHQAagRAegDIAQAAIAAgBQALgiAegYQAdgYAkgDQAkgEAhASQAKAGAIAGQASgOAWgHQAggKAiAHIAMAEQAHgHAIgFQAZgTAfgEQAegEAeALQAWAIARAPIAIgIQAagaAigGQAigHAiANQAOAFALAIQASgSAWgKQAZgLAdACQAWABAUAIQAMgWAUgRQAagVAggGQAggFAgANQAZAKASASQAdgUAjgCQAfgCAcAPQAIgJAJgIQAggcAogCQAngDAkAXIAOALQAIgIAIgIQAagXAggGQAggHAgALQAgAMAVAYQAbAhAFAvQADAjgOA6QgQBGgCAYIgBAcQgBARgCALQgGAagVAgQgYAjgcASQggATgngCQgngCgdgXQgXgRgMgaQgUADgUgEQgXgEgTgMQgOAMgSAHQgdANghgEQghgFgZgTIgBgBIgLAJQgiAZgogBQgoAAgigaIgKgJQgMAKgPAGQgYALgbABQgcAAgYgLQgSgIgPgPQgeAagkAKQgyANgrgWIgNgIIgOAOQgbAXgiAFQgcAFgbgJIgBAAQgUASgbAIQgbAIgbgEIgIgCIgEALQgPAigiAVQghAVglgCQghgCgcgTIgIAFQgaASghADQgeAEgbgLIgDARQgIAhgXAYQgcAdgqAHQgkAFgegMQgqAygtAMQgmALgogPIgOgHQgVAUgYAJQgUAIgVAAQgOAAgOgEg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AuWF6QgkgIgZgZIgKgKQgQALgUAHQgtAOgpgQQgogRgWgqQgSgkAFglQgRgFgPgKQghgWgPgpQgOgoAMgnQANgmAjgYQAjgZApACQAmACAgAYIALgGQAZgMAcgBQAcgBAZALIAKAFQAMgbAZgUQAagTAegFQAfgFAeALQAQAGANAJIABgBQAXgVAcgKQAdgJAfAGIAHABQAMgOAPgLQAbgSAhgDQAhgCAeANQAMAFAKAHQAJgJALgHQAagRAegDIAQAAIAAgBQALgiAegYQAdgYAkgDQAkgEAhASQAKAGAIAGQATgOAVgHQAggKAiAHIANAEQAHgHAIgFQAZgTAegEQAegEAeALQAWAIARAPIAIgIQAagaAigGQAigHAiANQAOAFALAIQASgSAWgKQAZgLAdACQAWABAUAIQAMgWAUgRQAagVAggGQAggFAgANQAZAKASASQAdgUAjgCQAfgCAcAPQAIgJAJgIQAggcAogCQAngDAkAXIAOALQAIgIAIgIQAagXAggGQAggHAgALQAgAMAVAYIACADQAXgNAdgDQAogDAhAUQAgATARAlQARAlgHAmQgDATgLAcIgNAiQgIAVgCALIgFAsQgFAtgXAjQgYAogmAQQgdAMgigEQgcgDgXgOQgKAJgKAGQggATgngCQgngCgdgXQgWgRgNgaQgUADgUgEQgXgEgTgMQgOAMgSAHQgdANghgEQghgFgZgTIgBgBIgLAJQgiAZgogBQgoAAgigaIgKgJQgMAKgPAGQgYALgbABQgcAAgYgLQgSgIgPgPQgeAagkAKQgyANgrgWIgNgIIgOAOQgbAXgiAFQgbAFgbgJIgBAAQgUASgcAIQgbAIgbgEIgIgCIgEALQgPAigiAVQghAVglgCQghgCgcgTIgIAFQgaASghADQgeAEgbgLIgDARQgIAhgXAYQgcAdgqAHQgkAFgegMQgqAygtAMQgmALgogPIgOgHQgVAUgYAJQgUAIgVAAQgNAAgPgEg");
	var mask_10_graphics_51 = new cjs.Graphics().p("AvyF6QglgIgZgZIgKgKQgQALgUAHQgtAOgogQQgpgRgVgqQgTgkAFglQgRgFgOgKQgigWgOgpQgPgoANgnQAMgmAjgYQAkgZAoACQAmACAgAYIAMgGQAYgMAcgBQAcgBAZALIAKAFQANgbAZgUQAZgTAfgFQAegFAfALQAPAGAOAJIABgBQAWgVAdgKQAdgJAeAGIAIABQALgOAQgLQAagSAigDQAhgCAdANQAMAFAKAHQAJgJAMgHQAagRAdgDIAQAAIABgBQALgiAdgYQAegYAjgDQAkgEAhASQAKAGAIAGQATgOAVgHQAhgKAiAHIAMAEQAHgHAIgFQAagTAegEQAfgEAdALQAWAIARAPIAHgIQAagaAigGQAigHAiANQAOAFAMAIQARgSAXgKQAZgLAcACQAXABATAIQAMgWAVgRQAagVAggGQAggFAfANQAZAKASASQAdgUAjgCQAfgCAdAPQAHgJAJgIQAggcAogCQAogDAjAXIAPALQAHgIAJgIQAZgXAggGQAggHAgALQAgAMAVAYIACADQAXgNAdgDQApgDAgAUQATALAOASQALgMAOgJQAhgUAlABQAlACAfAXQAfAXAMAjQAPApgNA2QgFAYgOAuIgJAsQgGAYgOAgQgOAmgLAUQgSAjgZAXQgcAbghAIQgeAHgegJQgfgIgWgWQgOgOgJgSQgeAMghgEQgdgDgXgOQgJAJgLAGQgfATgngCQgngCgegXQgWgRgNgaQgUADgUgEQgWgEgUgMQgOAMgRAHQgdANghgEQghgFgagTIgBgBIgLAJQgiAZgogBQgoAAghgaIgLgJQgMAKgOAGQgYALgcABQgbAAgYgLQgTgIgPgPQgdAagkAKQgzANgrgWIgNgIIgNAOQgbAXghAFQgcAFgcgJIAAAAQgVASgbAIQgbAIgbgEIgJgCIgEALQgPAighAVQgiAVglgCQghgCgcgTIgHAFQgbASggADQgfAEgagLIgDARQgIAhgXAYQgcAdgrAHQgkAFgegMQgpAyguAMQgmALgngPIgPgHQgVAUgXAJQgUAIgWAAQgNAAgOgEg");
	var mask_10_graphics_52 = new cjs.Graphics().p("Aw9F6QgkgIgZgZIgKgKQgQALgUAHQgtAOgpgQQgogRgWgqQgTgkAFglQgQgFgPgKQghgWgPgpQgOgoAMgnQANgmAjgYQAjgZApACQAmACAgAYIALgGQAZgMAcgBQAcgBAZALIAKAFQAMgbAZgUQAagTAegFQAfgFAeALQAQAGANAJIABgBQAXgVAcgKQAdgJAfAGIAHABQAMgOAPgLQAbgSAhgDQAhgCAeANQALAFAKAHQAKgJALgHQAagRAegDIAQAAIAAgBQALgiAegYQAdgYAkgDQAkgEAhASQAKAGAIAGQASgOAWgHQAggKAiAHIANAEQAHgHAIgFQAZgTAfgEQAegEAeALQAWAIARAPIAIgIQAagaAhgGQAigHAiANQAOAFALAIQASgSAWgKQAZgLAdACQAWABAUAIQAMgWAUgRQAagVAggGQAggFAgANQAZAKASASQAdgUAjgCQAfgCAcAPQAHgJAKgIQAggcAogCQAngDAkAXIAOALQAHgIAJgIQAagXAggGQAggHAgALQAgAMAVAYIACADQAXgNAdgDQAogDAhAUQATALANASQALgMAOgJQAigUAkABQAlACAfAXQAWAQANAWQAMgEAMgBQAcgEAcAJQAcAKAUAUQAVAUAKAbQAJAcgDAdQgDAQgLAgIgoBxQgKAdgGAOQgLAYgNAPQgYAcglALQgmALgjgLQgVgHgQgNIgFAFQgdAbghAIQgdAHgfgJQgegIgWgWQgPgOgJgSQgdAMgigEQgcgDgXgOQgKAJgKAGQggATgngCQgngCgdgXQgXgRgMgaQgUADgUgEQgXgEgTgMQgOAMgSAHQgdANghgEQghgFgZgTIgCgBIgKAJQgiAZgogBQgoAAgigaIgKgJQgMAKgPAGQgYALgbABQgcAAgYgLQgSgIgPgPQgeAagkAKQgxANgrgWIgNgIIgOAOQgbAXgiAFQgcAFgbgJIgBAAQgUASgcAIQgbAIgbgEIgIgCIgEALQgPAigiAVQghAVglgCQghgCgdgTIgHAFQgaASghADQgeAEgbgLIgDARQgIAhgXAYQgcAdgqAHQgkAFgfgMQgpAygtAMQgmALgogPIgOgHQgVAUgYAJQgUAIgVAAQgOAAgOgEg");
	var mask_10_graphics_53 = new cjs.Graphics().p("AyBF6QgkgIgZgZIgKgKQgQALgUAHQgtAOgpgQQgogRgWgqQgTgkAFglQgQgFgPgKQghgWgPgpQgOgoAMgnQANgmAjgYQAjgZApACQAmACAgAYIALgGQAZgMAcgBQAcgBAZALIAKAFQAMgbAZgUQAagTAegFQAfgFAeALQAQAGANAJIABgBQAXgVAcgKQAdgJAfAGIAHABQAMgOAPgLQAbgSAhgDQAhgCAeANQALAFAKAHQAKgJALgHQAagRAegDIAQAAIAAgBQALgiAegYQAdgYAkgDQAkgEAhASQAKAGAIAGQASgOAWgHQAggKAiAHIANAEQAHgHAIgFQAZgTAfgEQAegEAeALQAWAIARAPIAIgIQAagaAigGQAigHAhANQAOAFALAIQASgSAWgKQAZgLAdACQAWABAUAIQALgWAVgRQAagVAggGQAggFAgANQAZAKASASQAdgUAjgCQAfgCAcAPQAHgJAKgIQAggcAogCQAngDAkAXIAOALQAHgIAJgIQAagXAggGQAggHAgALQAgAMAVAYIACADQAXgNAdgDQAogDAhAUQATALANASQALgMAOgJQAigUAkABQAlACAfAXQAWAQANAWQAMgEAMgBQAcgEAcAJQAcAKAUAUQAVAUAKAbQAEANABAMQAlgDAkATQArAYAPArQAPArgTAuQgTAsgqATQgaANgegBQgegBgagOQgJgFgIgGIgGAPQgLAYgNAPQgYAcglALQgmALgjgLQgVgHgQgNIgFAFQgdAbghAIQgdAHgfgJQgegIgWgWQgPgOgJgSQgdAMgigEQgcgDgXgOQgKAJgKAGQggATgngCQgngCgdgXQgXgRgMgaQgUADgUgEQgXgEgTgMQgOAMgSAHQgdANghgEQghgFgZgTIgCgBIgKAJQgiAZgogBQgoAAgigaIgKgJQgMAKgPAGQgYALgbABQgcAAgYgLQgTgIgOgPQgeAagjAKQgyANgrgWIgNgIIgOAOQgbAXgiAFQgcAFgbgJIgBAAQgUASgcAIQgbAIgbgEIgIgCIgEALQgPAigiAVQghAVglgCQghgCgdgTIgHAFQgaASghADQgeAEgbgLIgDARQgIAhgXAYQgcAdgqAHQgkAFgfgMQgpAygtAMQgmALgogPIgOgHQgVAUgYAJQgUAIgVAAQgOAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_10_graphics_35,x:53.5419,y:179.1102}).wait(1).to({graphics:mask_10_graphics_36,x:60.7395,y:185.9067}).wait(1).to({graphics:mask_10_graphics_37,x:69.3922,y:184.4553}).wait(1).to({graphics:mask_10_graphics_38,x:77.4391,y:183.7268}).wait(1).to({graphics:mask_10_graphics_39,x:83.9806,y:181.5859}).wait(1).to({graphics:mask_10_graphics_40,x:91.7546,y:180.9088}).wait(1).to({graphics:mask_10_graphics_41,x:97.9178,y:176.6026}).wait(1).to({graphics:mask_10_graphics_42,x:105.6671,y:176.6026}).wait(1).to({graphics:mask_10_graphics_43,x:112.0937,y:175.1509}).wait(1).to({graphics:mask_10_graphics_44,x:120.7798,y:174.5586}).wait(1).to({graphics:mask_10_graphics_45,x:128.6056,y:173.7717}).wait(1).to({graphics:mask_10_graphics_46,x:136.8392,y:170.8847}).wait(1).to({graphics:mask_10_graphics_47,x:144.5551,y:170.8847}).wait(1).to({graphics:mask_10_graphics_48,x:151.844,y:169.9188}).wait(1).to({graphics:mask_10_graphics_49,x:160.7629,y:169.1104}).wait(1).to({graphics:mask_10_graphics_50,x:168.5525,y:169.1104}).wait(1).to({graphics:mask_10_graphics_51,x:177.8374,y:169.1104}).wait(1).to({graphics:mask_10_graphics_52,x:185.2828,y:169.1104}).wait(1).to({graphics:mask_10_graphics_53,x:192.0867,y:169.1104}).wait(172));

	// 筆畫3
	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(0,0,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).wait(190));

	// 遮色片2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_20 = new cjs.Graphics().p("AGNLgIAAlXICrAAIAAFXg");
	var mask_11_graphics_21 = new cjs.Graphics().p("Ah+ijID6gOIADFVIj6AOg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AioidIFKgbIAHFWIlKAag");
	var mask_11_graphics_23 = new cjs.Graphics().p("AjSiWIGagoIALFVImaAog");
	var mask_11_graphics_24 = new cjs.Graphics().p("Aj7iPIHpg2IAPFVInrA2g");
	var mask_11_graphics_25 = new cjs.Graphics().p("AkliIII5hDIASFUIo5BDg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AlPiCIKKhQIAVFVIqKBQg");
	var mask_11_graphics_27 = new cjs.Graphics().p("Al5h7ILahdIAZFUIraBdg");
	var mask_11_graphics_28 = new cjs.Graphics().p("Amjh0IMqhrIAdFUIsqBrg");
	var mask_11_graphics_29 = new cjs.Graphics().p("AnMhtIN6h5IAfFUIt6B5g");
	var mask_11_graphics_30 = new cjs.Graphics().p("An2hmIPKiGIAjFTIvKCGg");
	var mask_11_graphics_31 = new cjs.Graphics().p("AoghfIQaiUIAnFUIwaCTg");
	var mask_11_graphics_32 = new cjs.Graphics().p("ApKhZIRqihIArFUIxqChg");
	var mask_11_graphics_33 = new cjs.Graphics().p("Ap0hSIS7iuIAtFTIy6Cug");
	var mask_11_graphics_34 = new cjs.Graphics().p("AizHMIUKi7IAxFUI0KC7g");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_11_graphics_20,x:56.775,y:73.625}).wait(1).to({graphics:mask_11_graphics_21,x:109.275,y:130.35}).wait(1).to({graphics:mask_11_graphics_22,x:113.6,y:130.6}).wait(1).to({graphics:mask_11_graphics_23,x:117.875,y:130.875}).wait(1).to({graphics:mask_11_graphics_24,x:122.15,y:131.125}).wait(1).to({graphics:mask_11_graphics_25,x:126.45,y:131.375}).wait(1).to({graphics:mask_11_graphics_26,x:130.75,y:131.625}).wait(1).to({graphics:mask_11_graphics_27,x:135.05,y:131.9}).wait(1).to({graphics:mask_11_graphics_28,x:139.325,y:132.125}).wait(1).to({graphics:mask_11_graphics_29,x:143.625,y:132.375}).wait(1).to({graphics:mask_11_graphics_30,x:147.925,y:132.625}).wait(1).to({graphics:mask_11_graphics_31,x:152.2,y:132.875}).wait(1).to({graphics:mask_11_graphics_32,x:156.475,y:133.15}).wait(1).to({graphics:mask_11_graphics_33,x:160.8,y:133.4}).wait(1).to({graphics:mask_11_graphics_34,x:116.0402,y:79.9836}).wait(191));

	// 筆畫2
	this.instance_4 = new lib.CachedBmp_7();
	this.instance_4.setTransform(0,0,0.5,0.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(205));

	// 遮色片1 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_1 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_2 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_3 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_4 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_5 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_6 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_7 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_8 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_9 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_10 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_11 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_12 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_13 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_14 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_15 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_16 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_17 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_18 = new cjs.Graphics().p("Ag/CWIAAkrIB/AAIAAErg");
	var mask_12_graphics_19 = new cjs.Graphics().p("AkTFGIWbmAIBOEhI2bGBg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_1,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_2,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_3,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_4,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_5,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_6,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_7,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_8,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_9,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_10,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_11,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_12,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_13,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_14,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_15,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_16,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_17,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_18,x:98.575,y:97.9}).wait(1).to({graphics:mask_12_graphics_19,x:123.7822,y:61.5825}).wait(206));

	// 筆畫1
	this.instance_5 = new lib.CachedBmp_8();
	this.instance_5.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,383.5);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,43,217), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.7,1,1,0,0,0,42.8,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112.4,-62.5,1,1,0,0,0,83,3.8);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.45,1,1,0,0,0,19.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.45,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:0,x:-112.4,y:-62.5,regY:3.8}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regX:42.8,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.2133,x:-118.15,y:89.65,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:0.9714,x:-115.95,y:-63.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:0.9617,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4275,x:-124.35,y:88.8,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:1.9439,x:-119.6,y:-64.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:1.9246,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6409,x:-130.6,y:87.8,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:2.9161,x:-123.2,y:-64.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:2.8872,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8551,x:-136.75,y:86.75,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:3.8882,x:-126.8,y:-65.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:3.8497,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0684,x:-142.95,y:85.55,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:4.8598,x:-130.35,y:-66.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:4.8124,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2827,x:-149.1,y:84.25,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:5.8318,x:-134,y:-67.85,regY:3.8}},{t:this.ikNode_1,p:{rotation:5.7747,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4961,x:-155.25,y:82.85,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:6.8038,x:-137.5,y:-69,regY:3.8}},{t:this.ikNode_1,p:{rotation:6.7369,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7103,x:-161.35,y:81.35,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:7.776,x:-141,y:-70.15,regY:3.8}},{t:this.ikNode_1,p:{rotation:7.7001,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.9237,x:-167.4,y:79.75,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:8.7487,x:-144.5,y:-71.5,regY:3.7}},{t:this.ikNode_1,p:{rotation:8.662,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.1381,x:-173.45,y:78.05,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:9.7203,x:-148.05,y:-72.7,regY:3.8}},{t:this.ikNode_1,p:{rotation:9.6246,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.3516,x:-179.45,y:76.25,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:10.6922,x:-151.5,y:-74,regY:3.8}},{t:this.ikNode_1,p:{rotation:10.5872,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.566,x:-185.45,y:74.35,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:11.6645,x:-154.9,y:-75.4,regY:3.8}},{t:this.ikNode_1,p:{rotation:11.5503,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.7795,x:-191.4,y:72.35,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:12.6366,x:-158.35,y:-76.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:12.5121,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.9931,x:-197.45,y:70.25,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:13.609,x:-161.75,y:-78.35,regY:3.8}},{t:this.ikNode_1,p:{rotation:13.475,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.2067,x:-203.35,y:68,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:14.5806,x:-165.05,y:-79.95,regY:3.8}},{t:this.ikNode_1,p:{rotation:14.4379,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.4213,x:-209.2,y:65.7,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:15.5529,x:-168.45,y:-81.6,regY:3.8}},{t:this.ikNode_1,p:{rotation:15.3998,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.635,x:-214.9,y:63.3,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:16.5256,x:-171.8,y:-83.3,regY:3.8}},{t:this.ikNode_1,p:{rotation:16.3624,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.8488,x:-220.65,y:60.8,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:17.4974,x:-175.05,y:-85.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:17.3251,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.0626,x:-226.35,y:58.2,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:18.469,x:-178.3,y:-86.85,regY:3.8}},{t:this.ikNode_1,p:{rotation:18.2876,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.2765,x:-232.05,y:55.65,regX:19.2,regY:1.5}},{t:this.ikNode_2,p:{rotation:19.4413,x:-181.5,y:-88.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:19.2506,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.4905,x:-237.65,y:52.7,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:20.4132,x:-184.7,y:-90.6,regY:3.8}},{t:this.ikNode_1,p:{rotation:20.2129,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.7045,x:-243.25,y:49.8,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:21.3856,x:-187.85,y:-92.55,regY:3.8}},{t:this.ikNode_1,p:{rotation:21.1755,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.9177,x:-248.75,y:46.85,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:22.3578,x:-191,y:-94.6,regY:3.8}},{t:this.ikNode_1,p:{rotation:22.1378,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.1318,x:-254.45,y:43.75,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:23.3295,x:-194.1,y:-96.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:23.1,x:-69.5,y:-279.7,regX:42.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.3452,x:-259.85,y:40.75,regX:19.1,regY:1.5}},{t:this.ikNode_2,p:{rotation:24.3022,x:-197.1,y:-98.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:24.0627,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.5595,x:-265.1,y:37.35,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:25.2739,x:-200.1,y:-100.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:25.0256,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.7738,x:-270.4,y:34.15,regX:19.2,regY:1.5}},{t:this.ikNode_2,p:{rotation:26.2456,x:-203.15,y:-103.15,regY:3.8}},{t:this.ikNode_1,p:{rotation:25.9876,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.9874,x:-275.65,y:30.6,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:27.2176,x:-206.1,y:-105.4,regY:3.8}},{t:this.ikNode_1,p:{rotation:26.9506,x:-69.5,y:-279.55,regX:42.8,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.2011,x:-280.85,y:27.05,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:28.1902,x:-209,y:-107.75,regY:3.8}},{t:this.ikNode_1,p:{rotation:27.9129,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.9945,x:-275.85,y:30.45,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:27.2501,x:-206.15,y:-105.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:26.983,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.7879,x:-270.75,y:33.9,regX:19.2,regY:1.5}},{t:this.ikNode_2,p:{rotation:26.3109,x:-203.35,y:-103.3,regY:3.8}},{t:this.ikNode_1,p:{rotation:26.0517,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.5805,x:-265.65,y:37.05,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:25.3713,x:-200.45,y:-101.15,regY:3.8}},{t:this.ikNode_1,p:{rotation:25.1222,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.3742,x:-260.55,y:40.2,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:24.4317,x:-197.55,y:-99.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:24.1911,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.1678,x:-255.35,y:43.25,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:23.4912,x:-194.6,y:-96.95,regY:3.8}},{t:this.ikNode_1,p:{rotation:23.2609,x:-69.55,y:-279.55,regX:42.8,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.9607,x:-249.85,y:46.25,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:22.5518,x:-191.6,y:-95,regY:3.8}},{t:this.ikNode_1,p:{rotation:22.3303,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.7536,x:-244.55,y:49.15,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:21.6121,x:-188.6,y:-93.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:21.3998,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.5475,x:-239.15,y:51.95,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:20.6727,x:-185.55,y:-91.15,regY:3.8}},{t:this.ikNode_1,p:{rotation:20.4694,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.3406,x:-233.75,y:54.7,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:19.7328,x:-182.5,y:-89.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:19.539,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.1336,x:-228.25,y:57.35,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:18.7938,x:-179.35,y:-87.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:18.6083,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.9268,x:-222.75,y:59.85,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:17.8535,x:-176.2,y:-85.7,regY:3.8}},{t:this.ikNode_1,p:{rotation:17.678,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.72,x:-217.2,y:62.35,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:16.9142,x:-173.05,y:-83.95,regY:3.8}},{t:this.ikNode_1,p:{rotation:16.7471,x:-69.45,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.5133,x:-211.75,y:64.65,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:15.9745,x:-169.9,y:-82.35,regY:3.8}},{t:this.ikNode_1,p:{rotation:15.8173,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.3066,x:-206.1,y:66.95,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:15.0346,x:-166.7,y:-80.75,regY:3.8}},{t:this.ikNode_1,p:{rotation:14.887,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.0999,x:-200.45,y:69.15,regX:19.1,regY:1.4}},{t:this.ikNode_2,p:{rotation:14.0952,x:-163.45,y:-79.2,regY:3.8}},{t:this.ikNode_1,p:{rotation:13.9563,x:-69.45,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.8933,x:-194.55,y:71.2,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:13.155,x:-160.15,y:-77.7,regY:3.8}},{t:this.ikNode_1,p:{rotation:13.0258,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.6868,x:-188.8,y:73.2,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:12.2158,x:-156.9,y:-76.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:12.0951,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.4802,x:-183.05,y:75.15,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:11.2756,x:-153.55,y:-74.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:11.165,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.2737,x:-177.25,y:76.9,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:10.3357,x:-150.25,y:-73.5,regY:3.8}},{t:this.ikNode_1,p:{rotation:10.2343,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0663,x:-171.45,y:78.65,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:9.3968,x:-146.85,y:-72.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:9.3038,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8599,x:-165.6,y:80.2,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:8.4569,x:-143.45,y:-71,regY:3.8}},{t:this.ikNode_1,p:{rotation:8.3747,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6535,x:-159.7,y:81.75,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:7.5166,x:-140.1,y:-69.95,regY:3.7}},{t:this.ikNode_1,p:{rotation:7.4435,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4462,x:-153.8,y:83.2,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:6.5776,x:-136.7,y:-68.75,regY:3.8}},{t:this.ikNode_1,p:{rotation:6.5124,x:-69.55,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2398,x:-147.9,y:84.5,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:5.6377,x:-133.2,y:-67.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:5.5823,x:-69.5,y:-279.75,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0334,x:-141.95,y:85.75,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:4.6984,x:-129.8,y:-66.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:4.6518,x:-69.5,y:-279.75,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8262,x:-135.95,y:86.9,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:3.7585,x:-126.35,y:-65.7,regY:3.8}},{t:this.ikNode_1,p:{rotation:3.7218,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6199,x:-129.95,y:87.9,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:2.8189,x:-122.85,y:-64.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:2.7909,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4127,x:-123.95,y:88.85,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:1.8792,x:-119.35,y:-64,regY:3.8}},{t:this.ikNode_1,p:{rotation:1.8608,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2063,x:-117.95,y:89.65,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:0.939,x:-115.8,y:-63.2,regY:3.8}},{t:this.ikNode_1,p:{rotation:0.9303,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-111.95,y:90.45,regX:19.2,regY:1.4}},{t:this.ikNode_2,p:{rotation:0,x:-112.35,y:-62.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:0,x:-69.55,y:-279.75,regX:42.8,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.5,-299.7,325.7,503.29999999999995);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.7,1,1,0,0,0,42.8,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112.4,-62.5,1,1,0,0,0,83,3.8);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.45,1,1,0,0,0,19.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.45}},{t:this.ikNode_2,p:{rotation:0,x:-112.4,y:-62.5,regY:3.8}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.1346,x:-105.7,y:91.15}},{t:this.ikNode_2,p:{rotation:-0.7405,x:-108.1,y:-61.6,regY:3.8}},{t:this.ikNode_1,p:{rotation:-1.1253,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.2693,x:-99.45,y:91.8}},{t:this.ikNode_2,p:{rotation:-1.482,x:-103.85,y:-60.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:-2.2518,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.4039,x:-93.2,y:92.35}},{t:this.ikNode_2,p:{rotation:-2.2238,x:-99.5,y:-60.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:-3.3775,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.5386,x:-86.9,y:92.8}},{t:this.ikNode_2,p:{rotation:-2.965,x:-95.15,y:-59.75,regY:3.8}},{t:this.ikNode_1,p:{rotation:-4.5036,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.6741,x:-80.6,y:93.15}},{t:this.ikNode_2,p:{rotation:-3.706,x:-90.85,y:-59.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:-5.6298,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.8087,x:-74.3,y:93.4}},{t:this.ikNode_2,p:{rotation:-4.4475,x:-86.5,y:-58.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:-6.7554,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.9434,x:-68,y:93.55}},{t:this.ikNode_2,p:{rotation:-5.1889,x:-82.2,y:-58.55,regY:3.8}},{t:this.ikNode_1,p:{rotation:-7.8811,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.078,x:-61.6,y:93.55}},{t:this.ikNode_2,p:{rotation:-5.9303,x:-77.85,y:-58.35,regY:3.8}},{t:this.ikNode_1,p:{rotation:-9.0071,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.2127,x:-55.3,y:93.45}},{t:this.ikNode_2,p:{rotation:-6.6717,x:-73.45,y:-58.4,regY:3.7}},{t:this.ikNode_1,p:{rotation:-10.1331,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.3483,x:-49,y:93.2}},{t:this.ikNode_2,p:{rotation:-7.4126,x:-69.15,y:-58.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:-11.2595,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.4829,x:-42.7,y:92.95}},{t:this.ikNode_2,p:{rotation:-8.1538,x:-64.8,y:-58.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:-12.385,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.6176,x:-36.4,y:92.5}},{t:this.ikNode_2,p:{rotation:-8.8956,x:-60.45,y:-58.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:-13.5108,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.7523,x:-30.1,y:91.95}},{t:this.ikNode_2,p:{rotation:-9.637,x:-56.05,y:-58.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:-14.6365,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.887,x:-23.8,y:91.25}},{t:this.ikNode_2,p:{rotation:-10.3784,x:-51.75,y:-58.95,regY:3.8}},{t:this.ikNode_1,p:{rotation:-15.7627,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.0217,x:-17.55,y:90.5}},{t:this.ikNode_2,p:{rotation:-11.1196,x:-47.4,y:-59.3,regY:3.8}},{t:this.ikNode_1,p:{rotation:-16.8887,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.1565,x:-11.3,y:89.65}},{t:this.ikNode_2,p:{rotation:-11.861,x:-43.05,y:-59.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:-18.015,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.2921,x:-5.05,y:88.65}},{t:this.ikNode_2,p:{rotation:-12.6016,x:-38.75,y:-60.35,regY:3.8}},{t:this.ikNode_1,p:{rotation:-19.1405,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4268,x:1.2,y:87.55}},{t:this.ikNode_2,p:{rotation:-13.3437,x:-34.45,y:-61,regY:3.8}},{t:this.ikNode_1,p:{rotation:-20.2669,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.5616,x:7.4,y:86.35}},{t:this.ikNode_2,p:{rotation:-14.0844,x:-30.2,y:-61.75,regY:3.8}},{t:this.ikNode_1,p:{rotation:-21.3931,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.6964,x:13.55,y:85.05}},{t:this.ikNode_2,p:{rotation:-14.8255,x:-25.95,y:-62.6,regY:3.8}},{t:this.ikNode_1,p:{rotation:-22.5185,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.8312,x:19.65,y:83.6}},{t:this.ikNode_2,p:{rotation:-15.5676,x:-21.7,y:-63.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:-23.6447,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.9659,x:25.7,y:82.05}},{t:this.ikNode_2,p:{rotation:-16.3087,x:-17.45,y:-64.4,regY:3.8}},{t:this.ikNode_1,p:{rotation:-24.7701,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.1007,x:31.9,y:80.45}},{t:this.ikNode_2,p:{rotation:-17.0497,x:-13.2,y:-65.5,regY:3.8}},{t:this.ikNode_1,p:{rotation:-25.8961,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2356,x:37.95,y:78.7}},{t:this.ikNode_2,p:{rotation:-17.791,x:-9,y:-66.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:-27.0221,x:-69.5,y:-279.55,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.3705,x:44,y:76.8}},{t:this.ikNode_2,p:{rotation:-18.5325,x:-4.85,y:-67.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:-28.1488,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.5054,x:50,y:74.9}},{t:this.ikNode_2,p:{rotation:-19.2738,x:-0.7,y:-69.2,regY:3.8}},{t:this.ikNode_1,p:{rotation:-29.274,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.6403,x:56,y:72.85}},{t:this.ikNode_2,p:{rotation:-20.0154,x:3.45,y:-70.6,regY:3.8}},{t:this.ikNode_1,p:{rotation:-30.4,x:-69.65,y:-279.7,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7752,x:61.95,y:70.65}},{t:this.ikNode_2,p:{rotation:-20.756,x:7.5,y:-72.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:-31.5266,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.9093,x:67.85,y:68.4}},{t:this.ikNode_2,p:{rotation:-21.4975,x:11.55,y:-73.55,regY:3.8}},{t:this.ikNode_1,p:{rotation:-32.6524,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7796,x:62.15,y:70.6}},{t:this.ikNode_2,p:{rotation:-20.7812,x:7.65,y:-72.1,regY:3.8}},{t:this.ikNode_1,p:{rotation:-31.5635,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.649,x:56.4,y:72.7}},{t:this.ikNode_2,p:{rotation:-20.0647,x:3.65,y:-70.7,regY:3.7}},{t:this.ikNode_1,p:{rotation:-30.476,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.5185,x:50.6,y:74.65}},{t:this.ikNode_2,p:{rotation:-19.3479,x:-0.3,y:-69.3,regY:3.8}},{t:this.ikNode_1,p:{rotation:-29.3871,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.388,x:44.8,y:76.55}},{t:this.ikNode_2,p:{rotation:-18.6312,x:-4.3,y:-68.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:-28.2986,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2584,x:38.95,y:78.4}},{t:this.ikNode_2,p:{rotation:-17.9149,x:-8.3,y:-67,regY:3.7}},{t:this.ikNode_1,p:{rotation:-27.2098,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.1279,x:33.1,y:80.1}},{t:this.ikNode_2,p:{rotation:-17.1979,x:-12.35,y:-65.7,regY:3.8}},{t:this.ikNode_1,p:{rotation:-26.1217,x:-69.5,y:-279.55,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.9975,x:27.15,y:81.7}},{t:this.ikNode_2,p:{rotation:-16.4816,x:-16.4,y:-64.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:-25.0334,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.8671,x:21.3,y:83.2}},{t:this.ikNode_2,p:{rotation:-15.7647,x:-20.5,y:-63.7,regY:3.8}},{t:this.ikNode_1,p:{rotation:-23.9449,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.7366,x:15.45,y:84.65}},{t:this.ikNode_2,p:{rotation:-15.0482,x:-24.7,y:-62.95,regY:3.7}},{t:this.ikNode_1,p:{rotation:-22.8567,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.6062,x:9.45,y:85.95}},{t:this.ikNode_2,p:{rotation:-14.3314,x:-28.75,y:-62,regY:3.8}},{t:this.ikNode_1,p:{rotation:-21.7683,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4758,x:3.45,y:87.1}},{t:this.ikNode_2,p:{rotation:-13.6151,x:-32.9,y:-61.3,regY:3.8}},{t:this.ikNode_1,p:{rotation:-20.6793,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.3454,x:-2.55,y:88.2}},{t:this.ikNode_2,p:{rotation:-12.8984,x:-37.05,y:-60.75,regY:3.7}},{t:this.ikNode_1,p:{rotation:-19.591,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.2151,x:-8.6,y:89.2}},{t:this.ikNode_2,p:{rotation:-12.1818,x:-41.2,y:-60.05,regY:3.8}},{t:this.ikNode_1,p:{rotation:-18.503,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.0847,x:-14.6,y:90.1}},{t:this.ikNode_2,p:{rotation:-11.4654,x:-45.4,y:-59.55,regY:3.8}},{t:this.ikNode_1,p:{rotation:-17.4139,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.9544,x:-20.7,y:90.9}},{t:this.ikNode_2,p:{rotation:-10.7482,x:-49.6,y:-59.15,regY:3.8}},{t:this.ikNode_1,p:{rotation:-16.3258,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.824,x:-26.75,y:91.6}},{t:this.ikNode_2,p:{rotation:-10.0319,x:-53.75,y:-58.75,regY:3.8}},{t:this.ikNode_1,p:{rotation:-15.2376,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.6937,x:-32.8,y:92.2}},{t:this.ikNode_2,p:{rotation:-9.3151,x:-58,y:-58.55,regY:3.8}},{t:this.ikNode_1,p:{rotation:-14.1493,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.5634,x:-38.9,y:92.7}},{t:this.ikNode_2,p:{rotation:-8.5992,x:-62.2,y:-58.35,regY:3.8}},{t:this.ikNode_1,p:{rotation:-13.0608,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.4331,x:-45,y:93.05}},{t:this.ikNode_2,p:{rotation:-7.882,x:-66.4,y:-58.4,regY:3.7}},{t:this.ikNode_1,p:{rotation:-11.9726,x:-69.6,y:-279.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.3028,x:-51.1,y:93.3}},{t:this.ikNode_2,p:{rotation:-7.1658,x:-70.6,y:-58.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:-10.8835,x:-69.55,y:-279.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.1725,x:-57.2,y:93.45}},{t:this.ikNode_2,p:{rotation:-6.4491,x:-74.8,y:-58.25,regY:3.8}},{t:this.ikNode_1,p:{rotation:-9.7958,x:-69.55,y:-279.6,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.0422,x:-63.3,y:93.55}},{t:this.ikNode_2,p:{rotation:-5.7325,x:-78.95,y:-58.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:-8.7071,x:-69.6,y:-279.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.9119,x:-69.45,y:93.5}},{t:this.ikNode_2,p:{rotation:-5.016,x:-83.15,y:-58.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:-7.6181,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.7816,x:-75.55,y:93.35}},{t:this.ikNode_2,p:{rotation:-4.2993,x:-87.4,y:-58.9,regY:3.8}},{t:this.ikNode_1,p:{rotation:-6.5301,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.6513,x:-81.65,y:93.15}},{t:this.ikNode_2,p:{rotation:-3.5825,x:-91.55,y:-59.35,regY:3.8}},{t:this.ikNode_1,p:{rotation:-5.4418,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.5211,x:-87.75,y:92.8}},{t:this.ikNode_2,p:{rotation:-2.8662,x:-95.75,y:-59.8,regY:3.8}},{t:this.ikNode_1,p:{rotation:-4.3537,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.3908,x:-93.8,y:92.3}},{t:this.ikNode_2,p:{rotation:-2.1495,x:-99.9,y:-60.3,regY:3.8}},{t:this.ikNode_1,p:{rotation:-3.2646,x:-69.55,y:-279.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.2605,x:-99.9,y:91.75}},{t:this.ikNode_2,p:{rotation:-1.4331,x:-104.1,y:-61,regY:3.8}},{t:this.ikNode_1,p:{rotation:-2.1766,x:-69.6,y:-279.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1303,x:-105.95,y:91.1}},{t:this.ikNode_2,p:{rotation:-0.7161,x:-108.25,y:-61.65,regY:3.8}},{t:this.ikNode_1,p:{rotation:-1.0877,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-111.95,y:90.45}},{t:this.ikNode_2,p:{rotation:0,x:-112.35,y:-62.45,regY:3.8}},{t:this.ikNode_1,p:{rotation:0,x:-69.55,y:-279.75,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-279.7,340.8,486.7);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.7,1,1,0,0,0,42.8,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112.4,-62.5,1,1,0,0,0,83,3.8);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.45,1,1,0,0,0,19.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.45,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:-112.4,y:-62.5}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regX:42.8,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.5412,x:-114.65,y:89.9,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.0935,x:-114.75,y:-62.9}},{t:this.ikNode_1,p:{rotation:0.6479,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.0824,x:-117.3,y:89.4,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.1871,x:-117.2,y:-63.45}},{t:this.ikNode_1,p:{rotation:1.2966,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.6246,x:-120,y:88.85,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.2815,x:-119.65,y:-64}},{t:this.ikNode_1,p:{rotation:1.9447,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.1661,x:-122.7,y:88.35,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.3751,x:-122.05,y:-64.55}},{t:this.ikNode_1,p:{rotation:2.5931,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.7078,x:-125.4,y:87.7,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.4695,x:-124.55,y:-65.15}},{t:this.ikNode_1,p:{rotation:3.2409,x:-69.5,y:-279.7,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2488,x:-128.05,y:87.05,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.563,x:-126.95,y:-65.8}},{t:this.ikNode_1,p:{rotation:3.89,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7901,x:-130.7,y:86.4,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.6566,x:-129.35,y:-66.45}},{t:this.ikNode_1,p:{rotation:4.5378,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.3318,x:-133.4,y:85.7,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.751,x:-131.75,y:-67.15}},{t:this.ikNode_1,p:{rotation:5.1863,x:-69.65,y:-279.65,regX:42.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.8738,x:-136,y:84.95,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.8446,x:-134.15,y:-67.9}},{t:this.ikNode_1,p:{rotation:5.8344,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.4154,x:-138.65,y:84.25,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.939,x:-136.55,y:-68.6}},{t:this.ikNode_1,p:{rotation:6.4835,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.9566,x:-141.3,y:83.45,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.0326,x:-138.9,y:-69.4}},{t:this.ikNode_1,p:{rotation:7.1315,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.4984,x:-143.9,y:82.8,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.1261,x:-141.25,y:-70.15}},{t:this.ikNode_1,p:{rotation:7.7796,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.0399,x:-146.55,y:81.85,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.2206,x:-143.65,y:-71}},{t:this.ikNode_1,p:{rotation:8.4277,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.581,x:-149.1,y:80.95,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.3141,x:-146,y:-71.85}},{t:this.ikNode_1,p:{rotation:9.0761,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.1229,x:-151.75,y:80.1,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.4086,x:-148.4,y:-72.7}},{t:this.ikNode_1,p:{rotation:9.7248,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.6647,x:-154.3,y:79.2,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.5022,x:-150.7,y:-73.6}},{t:this.ikNode_1,p:{rotation:10.373,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.2063,x:-156.85,y:78.4,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.5958,x:-153.05,y:-74.55}},{t:this.ikNode_1,p:{rotation:11.0215,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.7479,x:-159.45,y:77.3,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.6902,x:-155.35,y:-75.5}},{t:this.ikNode_1,p:{rotation:11.6698,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.2894,x:-162,y:76.4,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.7838,x:-157.65,y:-76.45}},{t:this.ikNode_1,p:{rotation:12.3178,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.831,x:-164.65,y:75.3,regY:1.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:1.8774,x:-159.9,y:-77.5}},{t:this.ikNode_1,p:{rotation:12.9664,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.3718,x:-167.1,y:74.2,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.9719,x:-162.25,y:-78.55}},{t:this.ikNode_1,p:{rotation:13.6151,x:-69.5,y:-279.55,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.9136,x:-169.55,y:73.15,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.0655,x:-164.5,y:-79.6}},{t:this.ikNode_1,p:{rotation:14.2638,x:-69.45,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.4557,x:-172.1,y:72.05,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.1591,x:-166.75,y:-80.65}},{t:this.ikNode_1,p:{rotation:14.9116,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.997,x:-174.6,y:70.95,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.2536,x:-168.95,y:-81.8}},{t:this.ikNode_1,p:{rotation:15.5601,x:-69.45,y:-279.55,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.5388,x:-177.05,y:69.8,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.3472,x:-171.2,y:-82.9}},{t:this.ikNode_1,p:{rotation:16.2083,x:-69.45,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.0799,x:-179.6,y:68.65,regY:1.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:2.4408,x:-173.45,y:-84.05}},{t:this.ikNode_1,p:{rotation:16.8569,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.6213,x:-182,y:67.45,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.5354,x:-175.6,y:-85.3}},{t:this.ikNode_1,p:{rotation:17.5049,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.1631,x:-184.45,y:66.25,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.629,x:-177.8,y:-86.5}},{t:this.ikNode_1,p:{rotation:18.1532,x:-69.6,y:-279.6,regX:42.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.7046,x:-186.8,y:65,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.7227,x:-180,y:-87.7}},{t:this.ikNode_1,p:{rotation:18.8021,x:-69.55,y:-279.45,regX:42.8,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.1559,x:-183.45,y:66.7,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.5476,x:-177.05,y:-86.05}},{t:this.ikNode_1,p:{rotation:17.9332,x:-69.55,y:-279.6,regX:42.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.606,x:-180.05,y:68.25,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.3717,x:-174.1,y:-84.45}},{t:this.ikNode_1,p:{rotation:17.0644,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.0572,x:-176.65,y:69.85,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.1958,x:-171.15,y:-82.85}},{t:this.ikNode_1,p:{rotation:16.1947,x:-69.45,y:-279.55,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.508,x:-173.15,y:71.35,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.02,x:-168.2,y:-81.4}},{t:this.ikNode_1,p:{rotation:15.3262,x:-69.45,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.9586,x:-169.7,y:72.85,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.8441,x:-165.15,y:-79.95}},{t:this.ikNode_1,p:{rotation:14.4569,x:-69.45,y:-279.55,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.4092,x:-166.15,y:74.3,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.6692,x:-162.1,y:-78.5}},{t:this.ikNode_1,p:{rotation:13.5882,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.8602,x:-162.6,y:75.7,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.4934,x:-159.1,y:-77.1}},{t:this.ikNode_1,p:{rotation:12.7191,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.3103,x:-159.1,y:77.05,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.3176,x:-155.95,y:-75.8}},{t:this.ikNode_1,p:{rotation:11.8502,x:-69.45,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.7616,x:-155.55,y:78.35,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.1419,x:-152.9,y:-74.5}},{t:this.ikNode_1,p:{rotation:10.9816,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.2122,x:-151.95,y:79.6,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.9661,x:-149.75,y:-73.25}},{t:this.ikNode_1,p:{rotation:10.1127,x:-69.45,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.6627,x:-148.3,y:80.95,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.7904,x:-146.6,y:-72.05}},{t:this.ikNode_1,p:{rotation:9.2436,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.1133,x:-144.75,y:81.95,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.6146,x:-143.45,y:-70.9}},{t:this.ikNode_1,p:{rotation:8.3747,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.5647,x:-141.05,y:83.05,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.4389,x:-140.3,y:-69.8}},{t:this.ikNode_1,p:{rotation:7.5061,x:-69.45,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.0152,x:-137.45,y:84.15,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.2632,x:-137.1,y:-68.75}},{t:this.ikNode_1,p:{rotation:6.6366,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.4655,x:-133.7,y:85.1,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.0874,x:-133.9,y:-67.75}},{t:this.ikNode_1,p:{rotation:5.7677,x:-69.5,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.9165,x:-130.2,y:86.05,regY:1.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0874,x:-130.7,y:-66.85}},{t:this.ikNode_1,p:{rotation:4.8993,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.3673,x:-126.35,y:87,regY:1.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.2632,x:-127.5,y:-65.95}},{t:this.ikNode_1,p:{rotation:4.0302,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.8178,x:-122.65,y:87.75,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.4389,x:-124.2,y:-65.1}},{t:this.ikNode_1,p:{rotation:3.1612,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.2688,x:-118.9,y:88.6,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.6146,x:-120.95,y:-64.3}},{t:this.ikNode_1,p:{rotation:2.2921,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.7194,x:-115.2,y:89.3,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.7904,x:-117.7,y:-63.55}},{t:this.ikNode_1,p:{rotation:1.4235,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.1705,x:-111.45,y:90,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.9652,x:-114.4,y:-62.8}},{t:this.ikNode_1,p:{rotation:0.5543,x:-69.5,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.621,x:-107.65,y:90.65,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.141,x:-111.15,y:-62.15}},{t:this.ikNode_1,p:{rotation:-0.3139,x:-69.55,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.0719,x:-103.95,y:91.2,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.3168,x:-107.85,y:-61.55}},{t:this.ikNode_1,p:{rotation:-1.183,x:-69.55,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.5222,x:-100.15,y:91.75,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.4926,x:-104.6,y:-61}},{t:this.ikNode_1,p:{rotation:-2.0515,x:-69.6,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.9736,x:-96.4,y:92.25,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.6683,x:-101.25,y:-60.5}},{t:this.ikNode_1,p:{rotation:-2.9205,x:-69.55,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.4243,x:-92.55,y:92.7,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.8441,x:-97.95,y:-60.05}},{t:this.ikNode_1,p:{rotation:-3.7892,x:-69.55,y:-279.75,regX:42.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.8752,x:-88.8,y:93.05,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.02,x:-94.55,y:-59.65}},{t:this.ikNode_1,p:{rotation:-4.6589,x:-69.6,y:-279.65,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.3252,x:-85,y:93.35,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.1958,x:-91.25,y:-59.35}},{t:this.ikNode_1,p:{rotation:-5.5278,x:-69.55,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2229,x:-81.15,y:93.6,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.3708,x:-87.9,y:-59}},{t:this.ikNode_1,p:{rotation:-6.3964,x:-69.55,y:-279.6,regX:42.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.772,x:-77.35,y:93.85,regY:1.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.5467,x:-84.6,y:-58.75}},{t:this.ikNode_1,p:{rotation:-7.2654,x:-69.6,y:-279.6,regX:42.8,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.1,-293.3,275.8,500.6);


// stage content:
(lib.燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 春
	this.instance = new lib.春();
	this.instance.setTransform(384.75,402,0.7782,0.7767,0,0,0,181.6,191.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 小燈籠
	this.instance_1 = new lib.小燈籠();
	this.instance_1.setTransform(85.75,82.9,0.4232,0.4232,14.9998,0,0,-111.9,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 中燈籠
	this.instance_2 = new lib.中燈籠();
	this.instance_2.setTransform(405.35,109.7,0.6923,0.6923,-14.9987,0,0,-112,-38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 大燈籠
	this.instance_3 = new lib.大燈籠();
	this.instance_3.setTransform(144.35,227,1,1,1.2258,0,0,-111.9,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 背景
	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(1.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,228.1,280.6,347.29999999999995);
// library properties:
lib.properties = {
	id: '4509439986B3C24C9718C3AE3C2CED10',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/燈籠_atlas_1.png", id:"燈籠_atlas_1"},
		{src:"images/燈籠_atlas_2.png", id:"燈籠_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4509439986B3C24C9718C3AE3C2CED10'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;