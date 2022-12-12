import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ConstantAtomicWrapper = _test_isStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIsStringify<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);