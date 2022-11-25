import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_constant_atomic_union = _test_is_stringify(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.isStringify(input),
    ConstantAtomicUnion.SPOILERS,
);
