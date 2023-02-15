import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ConstantAtomicSimple = _test_is(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createIs<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
