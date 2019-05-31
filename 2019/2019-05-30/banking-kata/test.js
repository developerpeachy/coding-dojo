const assert = require('assert');
const Account = () => {
  this.balance = 0;

  const deposit = (cashdeposit) => {
    this.balance = this.balance + cashdeposit;
    return this.balance;
  };

  const withdraw = (cashWithdraw) => {
    this.balance = this.balance - cashWithdraw;
    return this.balance;
  }

  return {deposit, withdraw};
}

describe('Banking Kata', () => {
  let account;

  beforeEach(() => {
    account = Account();
  })

  it('deposit increases balance', () => {
    const cashdeposit = 50;
    const actual = account.deposit(cashdeposit);
    const expected = 50;

    assert.equal(actual, expected);
    assert.equal(account.deposit(50),100);
  });

  it ('withdraw decreases balance',() =>{
    const cashwithdraw = 50; 
    const actual = account.withdraw(cashwithdraw);
    const expected = -50; 

    assert.equal(actual, expected);
  })
  
});