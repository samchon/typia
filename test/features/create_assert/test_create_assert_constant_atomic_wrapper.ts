import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_constant_atomic_wrapper = _test_assert(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    TSON.createAssertType<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
