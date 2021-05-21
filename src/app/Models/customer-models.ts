export module CustomerModels {
  export interface ICustomer {
    id: string,
    company: string,
    contactFullName?: string,
    contactPosition?: string,
    contactPhone?: string
  }

  export interface ICustomerPost {
    id: string,
    company: string,
    contactFullName?: string,
    contactPosition?: string,
    contactPhone?: string
  }

  export interface ICustomerPut {
    company: string,
    contactFullName?: string,
    contactPosition?: string,
    contactPhone?: string
  }
}

export default CustomerModels;