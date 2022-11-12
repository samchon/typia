import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_constant_atomic_union = _test_is_clone(
    "constant atomic",
    ConstantAtomicUnion.generate,
    TSON.createIsClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
