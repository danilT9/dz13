console.log("--> DZ 12 <--");
console.log("---");
let user = {
    name: "user1",
    hobby: "swimming",
    premium: true,
}

const changeUserDatas = (object) => {
    let objMood = object.mood;
    objMood = "Happy";
    let objHobby = object.hobby;
    objHobby = "skydiving";
    let objPremium = object.premium;
    objPremium = false;

    let allValues = [];
    for(let values in object) {
        allValues.push(object[values]);
    }

    const result = []
    let index = 0;
    for(let keys of allValues) {
        index++;
        result.push(`${keys}:${allValues[index]}`);
    }
    const resultToStrings = result.join("\n")
    return resultToStrings;
}
console.log(changeUserDatas(user))





console.log("---")
function countProps(obj) {
    const valuesToArray = Object.keys(obj);
    return valuesToArray.length
}
console.log(countProps(user))






console.log("---")
let listOfEmployees = {
    "Name1":5,
    "Name2":4,
    "Name3":11,
    "Name4":7,
}
const findBestEmployee = (employees) => {
    let tasks = Object.values(employees);
    let names = Object.keys(employees);
    let namesAndTasks = Object.entries(employees);

    let maxTasks = tasks[0];
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i] > maxTasks) {
            maxTasks = tasks[i]
        }
    }
    return namesAndTasks[tasks.indexOf(maxTasks)][0]
}
console.log(findBestEmployee(listOfEmployees))






console.log("---")
let employeesSalary = {
    "Name1":5500,
    "Name2":4000,
    "Name3":11000,
    "Name4":7000,
}
function countTotalSalary(employees) {
    let employeesSalaryArray = Object.values(employees);
    let total = 0;
    for (let i = 0; i < employeesSalaryArray.length; i++) {
        total += employeesSalaryArray[i];
    }
    return total;
}
console.log(countTotalSalary(employeesSalary));





console.log("---");
const arrayObjects = [
    {
        card: "1234 5678 9012 3456",
    },
    {
        card: "0987 6543 2109 8765"
    },
    {
        card: "5555 5555 5555 5555"
    }
]
const getAllPropValues = (arr, prop) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i][prop])
    }
    return res
}
console.log(getAllPropValues(arrayObjects, "card"))





console.log("---");
const products = [
    {
        name: "Product1",
        price: 100,
        amount: 1,
    },
    {
        name: "Product2",
        price: 200,
        amount: 2,
    },
    {
        name: "Product3",
        price: 300,
        amount: 3,
    }
]
function calculateTotalPrice(allProducts, productName) {
    let objectIndexByName = 0;
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name === productName) {
            objectIndexByName = i;
        }
    }
    const result = allProducts[objectIndexByName].price * allProducts[objectIndexByName].amount;
    return result
}
console.log(calculateTotalPrice(products, "Product1"));





console.log("---");
let username = prompt("Username:");
let balance = Number(prompt("Balance:"));
let accountt = {
    username,
    balance,
    deposit: 0,
    depBal() {
        let depBalance = Number(prompt("Скільки хочете внести на депозит?"));
        this.deposit = this.deposit + depBalance;
        this.balance = this.balance - depBalance;
        return "Ваш баланс: " + this.balance + "\nРахунок депозиту: " + this.deposit
    },
    withdrawBal() {
        let withdrawBalance = Number(prompt("Скільки хочете зняти з депозиту?"));
        if (this.deposit >= withdrawBalance) {
            this.deposit = this.deposit - withdrawBalance;
            this.balance = this.balance + withdrawBalance;
            return "Ваш баланс: " + this.balance + "\nРахунок депозиту: " + this.deposit
        } else {
            return "Помилка. У вашому депозитному рахунку недостатньо грошей, щоб зняти " + withdrawBalance + " гривень.\nВаш рахунок депозиту: " + this.deposit
        }
    }
}
console.log(accountt)
console.log(accountt.depBal())
console.log(accountt)
console.log(accountt.withdrawBal())
console.log(accountt)






console.log("--> DZ 13 <--");
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const transactionDep = Transaction.DEPOSIT
const transactionWithdraw = Transaction.WITHDRAW

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
  id: 1,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    let transaction = {
        id: this.id++,
        amount,
        type,
    }
    return this.transactions.push(transaction);
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.createTransaction(amount, transactionDep);
    this.balance += amount;
    return this.balance
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    this.createTransaction(amount, transactionWithdraw);
    if (this.balance >= amount) {
        this.balance -= amount
        return this.balance
    } else {
        return "Зняття такої суми не можливо, недостатньо коштів.";
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return this.transactions.filter(transaction => transaction.id === id);
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    const transct = this.transactions.filter(transaction => transaction.type === type);
    let total = 0;
    for (let i = 0; i < transct.length; i++) {
        total += transct[i]['amount']
    };
    return total
  },
};
const amount = Number(prompt("Amount:"));
const amount1 = Number(prompt("Amount:"));
console.log(account.deposit(amount));
console.log(account.withdraw(amount1));
console.log(account.getBalance());
const transactionId = Number(prompt("Transaction id:"))
console.log(account.getTransactionDetails(transactionId));
const getTransactionTotalType = prompt("Get transactions total - deposit/withdraw?")
console.log(account.getTransactionTotal(getTransactionTotalType))
