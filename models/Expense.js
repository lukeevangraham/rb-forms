const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    purpose: {
        type: String
    },
    amount: {
        type: Number
    },
    fundNum: {
        type: Number
    },
    projectNum: {
        type: Number
    },
    deptNum: {
        type: Number
    },
    accountNum: {
        type: Number
    }
})

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;