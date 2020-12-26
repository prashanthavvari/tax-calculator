class SalaryObject {
    salaryProperties = ['basic', 'hra', 'lta', 'other_allowances']
    constructor() {
        this.salary = 0.0;
        this.initializeValues();
    }
    initializeValues() {
        this.salaryProperties.forEach((prop) => {
            this.set(prop, 0);
            document.querySelector(`#${prop}`).value = this[prop];
        });
    }
    get(prop) {
        if (this[prop] !== undefined) {
            return this[prop];
        }
        throw `No such property named ${prop}`;
    }
    set(prop, value) {
        value = value ? value : 0;
        let prevProp = this[prop];
        this[prop] = Number(value);
        this._calculateSalary(prop, value, prevProp);
    }
    setProperties(prop, value) {
        this.set(prop, value)
        alert('value changed');
    }
    _calculateSalary(prop, value, prevProp) {
        if (prevProp !== undefined) {
            if (prop === 'income_from_houserent') {
                this.salary -= prevProp - (prevProp*30)/100;
                this.salary += this[prop] - (this[prop]*30)/100;
            } else {
                this.salary -= prevProp;
                this.salary += this[prop];
            }
        }
        document.querySelector('#salary_total').value = this.salary;
    }
    resetValues() {
        salaryProperties.forEach((prop) => {
            this.set(prop, 0);
        })
    }
}