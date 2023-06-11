import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ConstantAtomicWrapper = _test_validatePrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.validatePrune(input),
    ConstantAtomicWrapper.SPOILERS,
);
