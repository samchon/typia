import typia from "typia";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ArrayAtomicSimple = _test_equals(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.equals(input),
);
