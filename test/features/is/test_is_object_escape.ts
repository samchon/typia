import TSON from "../../../src";

export function test_is_object_escape(): void {
    const checker = (input: SomeModule.IMember) => TSON.is(input);
    checker(null!);
}

namespace SomeModule {
    export interface IMember {
        id: string | null;
        email: String;
        name: string;
        sex: "male" | "female" | 1 | 2 | null;
        age: number | null;
        dead: boolean | null;
    }
}

/^[^0-9][\w]*$/g