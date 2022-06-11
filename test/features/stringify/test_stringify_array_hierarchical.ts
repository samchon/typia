import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_array_hierarchical(): void {
    const company: ICompany = {
        name: RandomGenerator.string(),
        departments: RandomGenerator.array(() => ({
            name: RandomGenerator.string(),
            employees: RandomGenerator.array(() => ({
                name: RandomGenerator.string(),
            })),
        })),
    };
    const json: string = TSON.stringify<ICompany>(company);
    const expected: string = JSON.stringify(company);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the hierarchical object.",
        );
}

interface ICompany {
    name: string;
    departments: IDepartment[];
}
interface IDepartment {
    name: string;
    employees: IEmployee[];
}
interface IEmployee {
    name: string;
}
