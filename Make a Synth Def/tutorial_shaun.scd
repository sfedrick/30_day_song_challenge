SynthDef(\shaunsine, {
 |out,sustain=1,freq=440,speed=1,begin=0,end=1,pan,accelerate,offset,clamp=1|
	var sintone = SinOsc.ar(freq);
	OffsetOut.ar(out,[sintone,sintone]);
}).add
