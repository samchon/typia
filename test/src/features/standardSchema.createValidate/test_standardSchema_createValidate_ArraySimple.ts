import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_standardSchema_createValidate_ArraySimple = (): void => _test_standardSchema_validate(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.createValidate<ArraySimple>());
