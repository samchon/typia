import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ConstantAtomicSimple = _test_isStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createIsStringify<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
