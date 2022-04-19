import TSON from "../../src";

import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_object_union(): void
{
    type Union = IStore | IBrand | ICompany | IDepartment | IEmployee;
    
    const stringify = TSON.createStringifier<Union>();
    const test = (input: Union) =>
    {
        const json: string = stringify(input);
        const expected: string = JSON.stringify(input);

        if (json !== expected)
            throw new Error("Bug on TSON.createStringifier(): failed to understand the union object type.");
    };

    test({ type: "store", name: RandomGenerator.string() });
    test({ type: "brand", name: RandomGenerator.string() });
    test({ type: "employee", name: RandomGenerator.string() });
    test({
        type: "department",
        name: RandomGenerator.string(),
        employees: RandomGenerator.array(() => ({
            type: "employee",
            name: RandomGenerator.string(),
        }))
    })
    test({
        type: "company",
        name: RandomGenerator.string(),
        departments: RandomGenerator.array(() => ({
            type: "department",
            name: RandomGenerator.string(),
            employees: RandomGenerator.array(() => ({
                type: "employee",
                name: RandomGenerator.string()
            }))
        }))
    });
}

interface IStore
{
    type: "store";
    name: string;
}
interface IBrand
{
    type: "brand";
    name: string;
}
interface ICompany
{
    type: "company";
    name: string;
    departments: IDepartment[];
}
interface IDepartment
{
    type: "department";
    name: string;
    employees: IEmployee[];
}
interface IEmployee
{
    type: "employee";
    name: string;
}