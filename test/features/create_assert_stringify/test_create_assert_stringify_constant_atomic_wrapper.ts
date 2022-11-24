import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_constant_atomic_wrapper =
    _test_assert_stringify(
        "wrapped atomic constant",
        ConstantAtomicWrapper.generate,
        TSON.createAssertStringify<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
