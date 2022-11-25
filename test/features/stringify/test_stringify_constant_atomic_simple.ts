import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_constant_atomic = _test_stringify(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.stringify(input),
);
