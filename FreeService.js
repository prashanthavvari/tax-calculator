class FreeTaxPlanService {
    constructor() {
        this.take_home_salary = 0;
        this.tax_due = 0;
        this.salaryObject = new SalaryObject();
        this.deductionsObject = new BasicDeductionsObject();
    }
    getTaxAmount(sal, cap, per) {
        return ((sal - cap) * per)/100;
    }
    getTaxableHRA() {
        // implement
    }
    getTaxableIncome() {
        this.deductionsObject.calculateBasicDeductions();
        let totalSalary = this.salaryObject.salary;
        let totalExempt = this.deductionsObject.total_exempt;
        return totalSalary - totalExempt;
    }
    calculateTaxes() {
        let taxableIncome = this.getTaxableIncome();
        if (taxableIncome < 250000) {
            this.tax_due = 0;
        } else if (taxableIncome < 500000) {
            this.tax_due = this.getTaxAmount(taxableIncome, 250000,  5);
        } else if (taxableIncome < 1000000) {
            this.tax_due = 12500 + this.getTaxAmount(taxableIncome, 500000, 20); 
        } else {
            this.tax_due = 112500 + this.getTaxAmount(taxableIncome, 1000000, 30);
        }
    }
}