//https://hydra.ojack.xyz/?sketch_id=2p3qgsZDYP2SaI4x

bpm = 90;


hush();

s0.initCam();
src(s0).out(o0);


i = src(s0).modulateScrollY(osc(.03),16).color(4,() => Math.sin(time),1);
i.out(o0)
i.out(o1)


k = shape(8,() => Math.sin(time)*3,.5).color(1,.2,.2).pixelate(8)
l = src(o1).diff(k,.5)
l.out(o0)
l.out(o2)

m = src(s0).kaleid(.3).modulateKaleid(osc([120,2,.1,2]),2,100);
j = src(o2).blend(m,.5);
j.out(o0)
j.out(o3)

q = src(s0).mask(noise(() => Math.cos(time)*5 + 25,1.4).thresh(.01))
r = src(o3).sub(q,.6)
r.out(o0)



