import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantAtomicUnion = _test_is(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.is(input),
    ConstantAtomicUnion.SPOILERS,
);
