class BankAccount extends Account{

    BankAccount(firstName, lastName, age, gender, balance, accountNumber){
        super(firstName, lastName, age, gender)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.balance = balance
        this.accountNumber = accountNumber
    }

    setBalance(balance){
        this.balance = balance;
    }
    getBalance(){
        return this.balance;
    }
    
    setAccountNumber(accountNumber){
        this.accountNumber = accountNumber;
    }

    getAccountNumber(){
        return this.accountNumber;
    }

    let myAccount = new BankAccount();
    console.log(myAccount.getAccountNumber);
    console.log(myAccount.balance);

}