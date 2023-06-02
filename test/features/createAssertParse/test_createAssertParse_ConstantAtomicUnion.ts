import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ConstantAtomicUnion = _test_assertParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createAssertParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
