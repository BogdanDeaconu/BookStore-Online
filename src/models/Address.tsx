class AddressModel{
    country: string;
    address: string;
    number: string;
    constructor(country: string, address: string, number: string){
        this.country = country;
        this.address = address;
        this.number = number;
    }
}

export default AddressModel;