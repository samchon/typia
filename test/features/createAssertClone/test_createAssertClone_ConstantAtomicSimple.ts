import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ConstantAtomicSimple = _test_assertClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
