class OtherIncome {
    otherIncomeProps = ['other_income', 'income_from_houserent'];
    constructor() {
        this.initializeValues();
    }
    initializeValues() {
        otherIncomeProps.forEach(prop => {
            this.set(prop, 0);
        });
    }
    get(prop) {
        return this[prop];
    }
    set(prop, value) {
        let prevProp = this[prop];
        this[prop] = Number(value);
    }
}