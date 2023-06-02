import typia from "../../../src";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_ArrayAtomicSimple = _test_assertParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.assertParse<ArrayAtomicSimple>(input),
    ArrayAtomicSimple.SPOILERS,
);
