import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_constant_atomic_union =
    _test_assert_clone(
        "constant atomic",
        ConstantAtomicUnion.generate,
        TSON.createAssertClone<ConstantAtomicUnion>(),
        ConstantAtomicUnion.SPOILERS,
    );
