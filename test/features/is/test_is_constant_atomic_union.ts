import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_constant_atomic_union = _test_is(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.is(input),
    ConstantAtomicUnion.SPOILERS,
);
