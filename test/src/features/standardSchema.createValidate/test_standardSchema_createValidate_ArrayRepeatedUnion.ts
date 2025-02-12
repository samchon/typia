import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_standardSchema_createValidate_ArrayRepeatedUnion = _test_standardSchema_validate(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)(typia.createValidate<ArrayRepeatedUnion>());
