import TSON from "../../src";
import { Primitive } from "../internal/Primitive";

export function test_stringify_object_generic_alias(): void {
    const alias: Alias = {
        value: "Something",
    };
    const stringify: (input: Alias) => string = TSON.createStringifier<Alias>();

    const json: string = stringify(alias);
    const parsed: Alias = JSON.parse(json);

    if (Primitive.equal_to(alias, parsed) === false)
        throw new Error(
            "Bug on TSON.createStringifier(): failed to understand the object alias type.",
        );
}

interface ISomething<T> {
    value: T;
}
type Alias = ISomething<string>;
