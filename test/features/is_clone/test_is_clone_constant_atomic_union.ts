import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_constant_atomic_union = _test_is_clone(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.isClone(input),
    ConstantAtomicUnion.SPOILERS,
);
