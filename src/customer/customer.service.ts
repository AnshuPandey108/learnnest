import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    addCustomer(createCustomerDto: { name: string; age: number }): Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDto,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

}
