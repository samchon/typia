import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_constant_atomic_union = _test_assert_type(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.assertType(input),
    ConstantAtomicUnion.SPOILERS,
);
