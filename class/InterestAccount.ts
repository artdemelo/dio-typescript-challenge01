import { DioAccount } from "./DioAccount"

export class InterestAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue: number): void =>
  {
    const balance = this.getBalance()+depositValue+10
    console.log(`Voce depositou R$${depositValue}. Seu saldo agora é: ${balance}`);
  } 
}