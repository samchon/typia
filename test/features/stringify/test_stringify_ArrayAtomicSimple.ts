import typia from "typia";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayAtomicSimple = _test_stringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.stringify(input),
);
