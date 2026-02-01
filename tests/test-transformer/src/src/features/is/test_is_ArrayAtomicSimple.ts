import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_is_ArrayAtomicSimple = (): void => _test_is(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)((input) => typia.is<ArrayAtomicSimple>(input));
