import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_isStringify_ConstantAtomicWrapper = _test_isStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.isStringify(input),
    ConstantAtomicWrapper.SPOILERS,
);
