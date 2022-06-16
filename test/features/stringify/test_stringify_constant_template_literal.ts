import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_constant_string(): void {
    const obj: IPointer<Literal> = {
        value: "abcdee",
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    if (Primitive.equal_to(JSON.parse(json), obj) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant string type.",
        );
}
type Literal = `abcd${string}`;
