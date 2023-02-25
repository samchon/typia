import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ConstantAtomicWrapper = _test_isPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.isPrune(input),
    ConstantAtomicWrapper.SPOILERS,
);
