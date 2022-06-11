import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object(): void {
    const test = (member: IMember) => {
        const json: string = TSON.stringify({
            ...member,
            ...{
                asdfasdf: "xczvafds",
            },
        });
        const expected: string = JSON.stringify(member);

        if (json !== expected)
            throw new Error(
                "Bug on TSON.createStringifier(): failed to undertstand the object type.",
            );
    };

    for (const id of [RandomGenerator.string(), null])
        for (const sex of ["male", "female", 1, 2, null] as const)
            for (const age of [RandomGenerator.number(), null])
                for (const dead of [true, false, null])
                    test(prepare(id, sex, age, dead));
}

function prepare(
    id: IMember["id"],
    sex: IMember["sex"],
    age: IMember["age"],
    dead: IMember["dead"],
): IMember {
    return {
        id,
        email: RandomGenerator.string(),
        name: RandomGenerator.string(),
        sex,
        age,
        dead,
    };
}

interface IMember {
    id: string | null;
    email: String;
    name: string;
    sex: "male" | "female" | 1 | 2 | null;
    age: number | null;
    dead: boolean | null;
}
