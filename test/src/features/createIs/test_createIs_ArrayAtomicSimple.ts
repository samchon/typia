import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createIs_ArrayAtomicSimple = (): void => _test_is(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)(typia.createIs<ArrayAtomicSimple>());
