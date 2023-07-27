export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.balance += depositValue
      console.log(`Voce depositou R$${depositValue}. Seu saldo agora é: ${this.balance}`);
    }
  }

  withdraw = (withdrawValue: number): void => {
    if(this.validateStatus()){
      if(withdrawValue <= this.balance)
      {
        this.balance -= withdrawValue;
        console.log(`Voce sacou: R$${withdrawValue}. Seu saldo agora é: ${this.balance}`)
      }
      else
        console.log(`Seu saldo (R$${this.balance}) é menor que o valor de saque solicitado (R$${withdrawValue})`)
  }
}

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
