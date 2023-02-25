import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ConstantAtomicWrapper = _test_isParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.isParse<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);
