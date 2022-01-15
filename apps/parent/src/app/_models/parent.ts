export class parent {
    _id? : string
    first_name? : string
    last_name? : string
    date_of_birth? : string
    occupation? : string
    blood_group? : string
    religion? : string
    email? : string
    address? : string
    phone? : string
    gender? : string
    child! : [{
        first_name? : string
        last_name? : string
        gender? : string
        date_of_birth? : string
        religion? : string
        email? : string
        phone? : string
        kelas? : {
            class_name? : string
        }
        address?: string
    }]
}