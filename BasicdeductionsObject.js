class BasicDeductionsObject {
    _basicdeductionprops = ['mutual_funds', 'home_loan_principal', 'home_loan_interest', 'pf']
    constructor() {
        this.initializeValues();
        this.total_exempt = 50000;
    }
    initializeValues() {
        this._basicdeductionprops.forEach((prop) => {
            this.set(prop, 0);
            document.querySelector(`#${prop}`).value = this.get(prop);
        });
    }
    get(prop) {
        if (this[prop] !== undefined) {
            return this[prop];
        }
        throw `No such property named ${prop}`;
    }
    set(prop, value) {
        this[prop] = Number(value);
    }
    calculateBasicDeductions() {
        this._basicdeductionprops.forEach((prop) => {
            this.total_exempt+= this.get(prop);
        });
    }
}