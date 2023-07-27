import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if(this.validateStatus()){
      const balance = this.getBalance() + loanValue
      console.log(`Voce pegou um empréstimo de R$${loanValue}. Seu saldo agora é: R$${balance}`)
    }
  }
}
