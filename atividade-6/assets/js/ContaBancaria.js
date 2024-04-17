class ContaBancaria {
  _numeroDaConta;
  _cliente;
  _saldo;

  constructor(numeroDaConta, cliente) {
    this._numeroDaConta = numeroDaConta;
    this._cliente = cliente;
    this._saldo = 0;
  }

  deposito(valor) {
    this._saldo += valor;
    return this._saldo;
  }

  saque(valor) {
    if (this._saldo - valor < 0) {
      return false;
    } else {
      this._saldo -= valor;
      return true;
    }
  }

  getSaldo() {
    return this._saldo;
  }
}
