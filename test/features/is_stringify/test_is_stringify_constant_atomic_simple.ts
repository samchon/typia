import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_constant_atomic = _test_is_stringify(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.isStringify(input),
    ConstantAtomicSimple.SPOILERS,
);
