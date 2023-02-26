import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createIsStringify_ConstantAtomicWrapper = _test_isStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIsStringify<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
