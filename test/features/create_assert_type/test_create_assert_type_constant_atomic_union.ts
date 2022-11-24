import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_constant_atomic_union = _test_assert_type(
    "constant atomic",
    ConstantAtomicUnion.generate,
    TSON.createAssertType<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
