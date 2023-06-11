import typia from "../../../src";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_ArrayAtomicSimple = _test_isParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.isParse<ArrayAtomicSimple>(input),
    ArrayAtomicSimple.SPOILERS,
);
