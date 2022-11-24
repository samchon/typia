import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_constant_atomic_wrapper =
    _test_assert_clone(
        "wrapped atomic constant",
        ConstantAtomicWrapper.generate,
        TSON.createAssertClone<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
