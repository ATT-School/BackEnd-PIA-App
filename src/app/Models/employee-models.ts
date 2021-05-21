export module EmployeeModels {
  export interface IEmployee {
    id: number,
    homeAddress: string,
    name: string,
    familyName: string
  }
  
  export interface IEmployeePost {
    homeAddress?: string,
    name: string,
    familyName: string
  }

  export interface IEmployeePut {
    homeAddress?: string,
    name: string,
    familyName: string
  }
}

export default EmployeeModels;