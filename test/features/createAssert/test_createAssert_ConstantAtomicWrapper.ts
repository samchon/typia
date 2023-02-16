import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantAtomicWrapper = _test_assert(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createAssert<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
