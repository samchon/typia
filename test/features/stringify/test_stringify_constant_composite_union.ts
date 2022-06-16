import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_constant_composite_union(): void {
    test("A");
    test("b");
    test(false);
    test(3.141592);
    test(0);
}
function test(value: Literal): void {
    const obj: IPointer<Literal> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    if (Primitive.equal_to(JSON.parse(json), obj) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant union type.",
        );
}
type Literal = "A" | "b" | false | 3.141592 | 0;
