import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_recursive(): void {
    const department: IDepartment = {
        name: RandomGenerator.string(),
        parent: {
            name: RandomGenerator.string(),
            parent: {
                name: RandomGenerator.string(),
                parent: null,
            },
        },
    };

    const json: string = TSON.stringify<IDepartment>(department);
    const expected: string = JSON.stringify(department);

    if (Primitive.equal_to(JSON.parse(json), department) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the recursive object.",
        );
}

interface IDepartment {
    name: string;
    parent: IDepartment | null;
}
