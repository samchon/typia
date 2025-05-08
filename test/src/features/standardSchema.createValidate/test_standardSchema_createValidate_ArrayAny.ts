import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_standardSchema_createValidate_ArrayAny = _test_standardSchema_validate(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.createValidate<ArrayAny>());
