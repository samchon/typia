import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_constant_atomic_wrapper =
    _test_assert_clone(
        "wrapped atomic constant",
        ConstantAtomicWrapper.generate,
        (input) => TSON.assertClone(input),
        ConstantAtomicWrapper.SPOILERS,
    );
