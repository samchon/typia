import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_constant_atomic_union = _test_assert(
    "constant atomic",
    ConstantAtomicUnion.generate,
    TSON.createAssert<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
