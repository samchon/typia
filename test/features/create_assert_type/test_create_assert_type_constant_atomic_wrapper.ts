import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_constant_atomic_wrapper = _test_assert_type(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    TSON.createAssertType<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
