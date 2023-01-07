import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ConstantAtomicWrapper = _test_validateParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.validateParse<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);