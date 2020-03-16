// import io from 'io-ts';

export type UserType =  
  'Artist' |
  'Venue' |
  'Fan';

  export const UserTypes: {
    Artist: UserType,
    Venue: UserType,
    Fan: UserType
  } = {
    Artist: "Artist",
    Venue: "Venue",
    Fan: "Fan",
  }
  
export type AddressData = {
  city: string,
  state: string,
  zipCode: number,
  address1: string,
  address2: string,
}

export type ContactData = {
  email: string,
  phoneNumber: string,
  name: string
}

export interface IUserAccountData {
  contact: ContactData,
  userType: UserType,
  password?: string,
  address?: AddressData,
  zipCode?: number
}

export interface IVenueAccountData extends IUserAccountData {
  venueName: string
}
