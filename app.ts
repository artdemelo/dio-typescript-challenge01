import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InterestAccount } from './class/InterestAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.withdraw(10)
peopleAccount.withdraw(11)
console.log(peopleAccount.getName())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
companyAccount.withdraw(20)
companyAccount.withdraw(21)
companyAccount.getLoan(21)
console.log(companyAccount.getName())

const interestAccount: InterestAccount = new InterestAccount('Arthur', 3 )
interestAccount.deposit(10)
console.log(interestAccount.getName())