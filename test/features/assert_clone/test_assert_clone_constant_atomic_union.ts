import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_constant_atomic_union =
    _test_assert_clone(
        "constant atomic",
        ConstantAtomicUnion.generate,
        (input) => TSON.assertClone(input),
        ConstantAtomicUnion.SPOILERS,
    );
