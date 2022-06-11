import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_object_generic_alias(): void {
    const alias: Alias = {
        value: "Something",
    };
    const json: string = TSON.stringify(alias);
    const parsed: Alias = JSON.parse(json);

    if (Primitive.equal_to(alias, parsed) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the object alias type.",
        );
}

interface ISomething<T> {
    value: T;
}
type Alias = ISomething<string>;
