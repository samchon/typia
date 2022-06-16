import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_constant_boolean_boolean(): void {
    test(true);
    test(false);
}
function test(value: true | false): void {
    const obj: IPointer<Literal> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    if (Primitive.equal_to(JSON.parse(json), obj) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant boolean type.",
        );
}
type Literal = true | false;
