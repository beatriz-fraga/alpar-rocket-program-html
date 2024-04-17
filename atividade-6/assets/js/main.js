const contaBancaria = new ContaBancaria("2469", "Felipe");
let valueEntry = document.getElementById("money-value");
let depositBtn = document.getElementById("money-deposit");
let withdrawBtn = document.getElementById("money-withdraw");
let resEl = document.getElementById("res");

depositBtn.addEventListener("click", () => {
  if (!valueEntry.value || isNaN(valueEntry.value)) {
    alert("Insira uma valor válido");
    valueEntry.value = "";
    return;
  }
  contaBancaria.deposito(Number(valueEntry.value));
  resEl.innerHTML = `
  <p>
      Saldo adicionado!<br/>
      Seu saldo agora é de ${contaBancaria.getSaldo().toFixed(2)} R$
  </p>
  `;
  valueEntry.value = "";
});
withdrawBtn.addEventListener("click", () => {
  if (!valueEntry.value || isNaN(valueEntry.value)) {
    alert("Insira uma valor válido");
    valueEntry.value = "";
    return;
  }
  if (contaBancaria.saque(Number(valueEntry.value))) {
    resEl.innerHTML = `
    <p>
    Transação Realizada!<br/>
    Seu saldo atual é ${contaBancaria.getSaldo().toFixed(2)} R$.
    </p>
    `;
    valueEntry.value = "";
  } else {
    resEl.innerHTML = `
      <p>
          Ops! <br/>
          Você não tem saldo o suficiente para realizar essa transação!<br/>
          Seu saldo atual é de ${contaBancaria.getSaldo()} R$.
      </p>
      `;
    valueEntry.value = "";
  }
});
