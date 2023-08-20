import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertStringify_ConstantAtomicWrapper = _test_assertStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.assertStringify<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);
