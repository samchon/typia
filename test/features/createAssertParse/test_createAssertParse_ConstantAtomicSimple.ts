import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ConstantAtomicSimple = _test_assertParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertParse<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
