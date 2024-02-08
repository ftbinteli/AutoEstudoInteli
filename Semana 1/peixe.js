var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // carregar o background
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    // carregar o logo do Inteli
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    // carregar o peixe serio
    this.load.image('peixe_serio', 'assets/peixes/peixe_serio.png');

    // carregar peixe verde
    this.load.image('peixe_verde', 'assets/peixes/peixe_verde.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    // adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    // adicionar o peixe serio na tela
    this.add.image(400, 300, 'peixe_serio').setOrigin(0.5, 0.5).setFlip(true, false);

    // adicionar o peixe verde na tela
    this.add.image(150, 450, 'peixe_verde').setOrigin(0.5, 0.5).setFlip(true, false);
}

function update() {

}
