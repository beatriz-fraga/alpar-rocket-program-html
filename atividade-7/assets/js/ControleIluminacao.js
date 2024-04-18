class ControleIluminacao {
  static instance;
  sala = false;
  cozinha = false;
  quarto = false;
  banheiro = false;
  varanda = false;
  lavanderia = false;
  todos = false;

  observers = [];

  toggle(comodo) {
    switch (comodo) {
      case "sala":
        this.sala = !this.sala;
        break;

      case "cozinha":
        this.cozinha = !this.cozinha;
        break;

      case "banheiro":
        this.banheiro = !this.banheiro;
        break;

      case "quarto":
        this.quarto = !this.quarto;
        break;

      case "varanda":
        this.varanda = !this.varanda;
        break;

      case "lavanderia":
        this.lavanderia = !this.lavanderia;
        break;

      case "todos":
        this.todos = !this.todos;
        break;
    }
    this.execute();
  }

  addEventListener(observer) {
    this.observers.push(observer);
  }

  execute() {
    console.log(this.observers);
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i]();
    }
  }
}

ControleIluminacao.instance = new ControleIluminacao();
