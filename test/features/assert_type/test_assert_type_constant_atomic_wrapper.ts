import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_constant_atomic_wrapper = _test_assert_type(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assertType(input),
    ConstantAtomicWrapper.SPOILERS,
);
