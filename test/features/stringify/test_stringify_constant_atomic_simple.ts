import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_stringify } from "./_test_stringify";

export function test_stringify_constant_atomic(): void {
    _test_stringify(
        "constant atomic",
        ConstantAtomicSimple.generate(false),
        (input) => TSON.stringify(input),
    )();
}
