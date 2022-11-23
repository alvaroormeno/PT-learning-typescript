abstract class Department {

	static fiscalYear = 2020;
	// private id: string;
	// private name: string; // can also use public but not needed -> public name: string; 
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.id = id
		// this.name = n;
	}

	static createEmployee(name: string) {
		return {name: name };
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this,this.employees.length);
		console.log(this.employees);
	}
}


class ITDepartment extends Department{
	admins: string[];

	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins
		
	}

	describe() {
		console.log('IT Department - ID:' + this.id);
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment

	get mostRecentReport() {
		if(this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found')
	}

	set mostRecentReport(value: string) {
		if(!value) {
			throw new Error('Please pass in a valid value!')
		}
		this.addReports(value)
	}

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[0]
	}

	static getInstance() {
		if(AccountingDepartment.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('d2', []);
		return this.instance;
	}

	describe() {
		console.log('Accounting department - ID:' + this.id)
	}

	addEmployee(name: string) {
		if(name === 'Max') {
			return
		}
		this.employees.push(name)
	}

	addReports(text: string) {
		this.reports.push(text)
		this.lastReport = text
	}

	printReports() {
		console.log(this.reports)
	}
}

const employee1 = Department.createEmployee('Max1')
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ['Max']);
it.addEmployee('Max');
it.addEmployee('Alvaro');
it.printEmployeeInformation();
console.log(it)

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = 'private report',
accounting.addReports('something went wrong report')
console.log(accounting.mostRecentReport)
accounting.addEmployee('Alvaro')
// accounting.printReports()
// accounting.printEmployeeInformation()
accounting.describe()


// const accountingCopy = {name: "alvaro", describe: accounting.describe}
// accountingCopy.describe()