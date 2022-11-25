import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ConstantAtomicWrapper =
    _test_assertStringify(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        TSON.createAssertStringify<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
