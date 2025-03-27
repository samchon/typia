import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_standardSchema_createValidate_ArrayAtomicSimple = _test_standardSchema_validate(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)(typia.createValidate<ArrayAtomicSimple>());
