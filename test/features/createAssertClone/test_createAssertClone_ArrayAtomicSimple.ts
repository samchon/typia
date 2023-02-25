import typia from "../../../src";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayAtomicSimple = _test_assertClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createAssertClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
