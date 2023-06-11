import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_validateParse_ConstantAtomicWrapper = _test_validateParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.validateParse<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);
