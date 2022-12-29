var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","25aadfcd-5b21-4ee2-a434-d04b38eb914d","dc47f9e0-d5e9-4c74-9a40-5c6fd33e011d","76801995-7e68-44d5-b304-e974dcf01b8c","103c2ad5-45f1-4198-93f1-4ae98862548b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"IkWrCzCeg3iqo5zXyXIDfsbNjRmfQ4n2","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"NqL0k.bary4FZSvIaAhFod3bMeGmeRYo","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":null,"frameSize":{"x":400,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y_MPJaiX6.nsEKNkK3mUncFAqJpvsKGn","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":396},"rootRelativePath":"assets/dfc53be7-786c-4305-b8eb-81fa595e9903.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"gEq1heHHOpl9isODbyKPCSgnQ0TUnYXw","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/47fade86-5bd1-4789-87af-896fb1433a7b.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":388,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"IC585PXrqrnmF6txXHaHYaNMj4PwcNH2","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":396},"rootRelativePath":"assets/043deebf-64b8-4795-be8d-db5055414f2f.png"},"25aadfcd-5b21-4ee2-a434-d04b38eb914d":{"name":"fondo","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":399},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:39:55 UTC","pngLastModified":"2021-01-05 18:39:16 UTC","version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","sourceSize":{"x":400,"y":399},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"},"dc47f9e0-d5e9-4c74-9a40-5c6fd33e011d":{"name":"pescadito","categories":["animals"],"frameCount":1,"frameSize":{"x":390,"y":396},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:23:04 UTC","pngLastModified":"2021-01-05 18:23:05 UTC","version":"vEEEnne4pN_1H4pr137lbVvbBskXS10g","sourceUrl":"assets/api/v1/animation-library/gamelab/vEEEnne4pN_1H4pr137lbVvbBskXS10g/category_animals/blowfish.png","sourceSize":{"x":390,"y":396},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/vEEEnne4pN_1H4pr137lbVvbBskXS10g/category_animals/blowfish.png"},"76801995-7e68-44d5-b304-e974dcf01b8c":{"name":"retrocreature_09_1","categories":["retro"],"frameCount":1,"frameSize":{"x":332,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:32:07 UTC","pngLastModified":"2021-01-05 19:31:10 UTC","version":"18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq","sourceUrl":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png","sourceSize":{"x":332,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png"},"103c2ad5-45f1-4198-93f1-4ae98862548b":{"name":"enemy4","categories":["retro"],"frameCount":1,"frameSize":{"x":357,"y":386},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:38 UTC","pngLastModified":"2021-01-05 19:31:47 UTC","version":"7pS_wUgBGl7iDyydk99x7AHoAmXYQGOI","sourceUrl":"assets/api/v1/animation-library/gamelab/7pS_wUgBGl7iDyydk99x7AHoAmXYQGOI/category_retro/retroship_01.png","sourceSize":{"x":357,"y":386},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/7pS_wUgBGl7iDyydk99x7AHoAmXYQGOI/category_retro/retroship_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fondo  = createSprite(200,200);
 fondo.setAnimation("fondo")
var pescadito = createSprite(200,345,200,345)
pescadito.shapeColor="red"

var enemy4 = createSprite(200,100,10,10)

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="black"

var goal =0;
var death = 0

pescadito.setAnimation("pescadito");
pescadito.scale=.1;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;
enemy4.setAnimation("enemy4");
enemy4.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);
enemy4.setVelocity(0,8);

function draw() {
  
//fondo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
enemy4.bounceOff(edges)

if(keyDown(UP_ARROW)){
  pescadito.y=pescadito.y-3
}

if(keyDown(DOWN_ARROW)){
  pescadito.y=pescadito.y+3
}

if(keyDown(LEFT_ARROW)){
  pescadito.x=pescadito.x-3
}

if(keyDown(RIGHT_ARROW)){
  pescadito.x=pescadito.x+3
}

if(pescadito.isTouching(enemy1)|| pescadito.isTouching(enemy2)|| pescadito.isTouching(enemy3)||pescadito.isTouching(enemy4)){
 playSound("https://audio.code.org/goal1.mp3");
 
 
  pescadito.x=200
  pescadito.y=350
  death = death+1
}
if(pescadito.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  pescadito.x=200
  pescadito.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
