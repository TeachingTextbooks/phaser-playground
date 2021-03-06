var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
      width: 800,
      height: 600
    },
    parent: 'phaser-example',
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };

  var game = new Phaser.Game(config);

  function preload() {
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }

  function create() {
    this.add.image(400, 300, "sky");

    var particles = this.add.particles("red");

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD"
    });

    var logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

}

    let button = document.createElement('button');
    button.textContent = 'Toggle';
    document.body.appendChild(button);

let isHidden = false;
  const div = document.getElementById('phaser-example');
  button.addEventListener("click", () => {
    isHidden = !isHidden;
    div.style.display = isHidden ? "block" : "none";
  });
