a.setBins(5) // amount of bins (bands) to separate the audio spectrum

noise(2)
	.modulate(o0,()=>a.fft[1]*.5) // listening to the 2nd band
	.out()

a.setSmooth(.8) // audio reactivity smoothness from 0 to 1, uses linear interpolation
a.setScale(8)    // loudness upper limit (maps to 0)
a.setCutoff(0.1)   // loudness from which to start listening to (maps to 0)

a.show() // show what hydra's listening to
// a.hide()

render(o0)
s0.initCam() // init webcam on s0
src(s0).out(o0) // show s0 on o0
s0.initCam()
src(s0)
  .color(
  () => -1 - a.fft[0]*2 , 
  () => 1 + a.fft[4]*2 )
  .contrast(() =>  2 -4*a.fft[0])
  .blend(src(s0).scale(() => 1 + a.fft[1]*0.2), 0.5) 
  .out()
a.setBins(5)