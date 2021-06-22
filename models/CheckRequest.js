const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkRequestSchema = new Schema({
    requestDate: {
        type: Date,
    },
    checkAmount: {
        type: Number
    },
    checkPayableTo: {
        type: String
    },
    checkPayableToStreet: {
        type: String
    },
    checkPayableToCity: {
        type: String
    },
    checkPayableToState: {
        type: String
    },
    checkPayableToZip: {
        type: Number
    },
    expenses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Expense"
        }
    ],
    mailCheckToCheckPayableAddress: {
        type: Boolean
    },
    returnCheckToRequestor: {
        type: Boolean
    },
    returnCheckToAlternate: {
        type: String
    },
    allReceiptsAttached: {
        type: Boolean
    },
    allReceiptsToFollow: {
        type: Boolean
    },
    noReceiptsPossible: {
        type: Boolean
    },
    noReceiptsPossibleExplanation: {
        type: String
    },
    independentContractor: {
        type: Boolean
    },
    completedW9FormAttached: {
        type: Boolean
    },
    contractOngoing: {
        type: Boolean
    },
    contractStartDate: {
        type: Date
    },
    contractEndDate: {
        type: Date
    },
    signatureRequestor: {
        type: String
    },
    signatureRequestorDate: {
        type: Date
    },
    signatureApprover: {
        type: String
    },
    signatureApproverDate: {
        type: Date
    },
    signatureReviewer: {
        type: String
    },
    signatureReviewerDate: {
        type: Date
    },
})

const CheckRequest = mongoose.model("CheckRequest", checkRequestSchema);

module.exports = CheckRequest