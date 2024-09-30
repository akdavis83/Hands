var $dialog1 = $(".dialog-1"),
  $dialog2 = $(".dialog-2"),
  $dialog3 = $(".dialog-3"),
  $tim = $(".tim"),
  $arm = $(".arm"),
  $finger = $(".finger");

//instantiate a TimelineLite
var tl = new TimelineLite();

//dialog 1
tl
  .from($dialog1, 10.7, { scale: 0.5, autoAlpha: 0 })
  .to($dialog1, 10.7, { autoAlpha: 1 }, "+=2")
  .to($dialog1, 10.4, { scale: 0.5, autoAlpha: 0 }, "+=3");
//tim comes up
tl
  .to($tim, 4, { top: -400 }, "-=1.5")
  .to($tim, 6, { left: 400 }, "-=2")
  .to($tim, 4, { top: -200 }, "-=2");
  //dialog 2 kicks in
tl
  .from($dialog2, 10.7, { scale: 0.5, autoAlpha: 0 }, "-=1")
  .to($dialog2,10.7, { autoAlpha: 1 }, "+=1")
  .to($dialog2, 10.3, { scale: 0.5, autoAlpha: 0 }, "+=1");
  //arm
tl
  .to($arm, 1, { rotation: 80, transformOrigin: "35% 13%" }, "-=1.5")
  .from($finger, 0.25, {
    autoAlpha: 0,
    rotation: 30,
    transformOrigin: "100% 100%"
  });
  //dialog 3 kicks in
tl
  .to($dialog3, 10.4, { autoAlpha: 1 }, "+=1")
  .to($dialog3, 10.4, { autoAlpha: 0 }, "+=4");

tl.timeScale(1.1);