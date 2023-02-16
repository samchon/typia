import typia from "typia";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayAtomicSimple = _test_clone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createClone<ArrayAtomicSimple>(),
);
