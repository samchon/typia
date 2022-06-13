import TSON from "../../../src";

export function test_is_object(): void {
    const test = (expected: boolean, input: () => IMember) => {
        if (TSON.is(input()) !== expected)
            throw new Error(
                "Bug on TSON.is(): failed to understand the object type.",
            );
    };

    // EXACT
    for (const id of ["some-id", null])
        for (const sex of ["male", "female", 1, 2, null] as const)
            for (const age of [27, null])
                for (const dead of [true, false, null])
                    test(true, () => ({
                        id,
                        email: "some@email.com",
                        name: "someone",
                        sex,
                        age,
                        dead,
                    }));

    // WRONG
    const common: IMember = {
        id: "some-id",
        email: "some@email.com",
        name: "someone",
        sex: 1,
        age: 27,
        dead: false,
    };
    test(false, () => ({ ...common, id: 1 as any }));
    test(false, () => ({ ...common, email: null as any }));
    test(false, () => ({ ...common, name: {} as any }));
    test(false, () => ({ ...common, sex: 3 as any }));
    test(false, () => ({ ...common, age: "twenty" as any }));
    test(false, () => ({ ...common, dead: 0 as any }));
}

interface IMember {
    id: string | null;
    email: String;
    name: string;
    sex: "male" | "female" | 1 | 2 | null;
    age: number | null;
    dead: boolean | null;
}
