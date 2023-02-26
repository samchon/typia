import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertStringify_ConstantAtomicWrapper =
    _test_assertStringify(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createAssertStringify<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
