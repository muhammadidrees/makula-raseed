
export interface PersonalInfo {
    name: string;
    email: string;
    taxID: string;
    address: Address;
  }
  
  export interface Address {
    street: string;
    city: string;
    zip: string;
  }