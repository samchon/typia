import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ConstantAtomicWrapper = _test_assertClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createAssertClone<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
