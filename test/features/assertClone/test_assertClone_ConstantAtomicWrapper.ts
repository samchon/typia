import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ConstantAtomicWrapper = _test_assertClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.assertClone(input),
    ConstantAtomicWrapper.SPOILERS,
);
