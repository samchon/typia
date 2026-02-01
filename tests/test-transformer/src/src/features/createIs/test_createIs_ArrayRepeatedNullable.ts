import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createIs_ArrayRepeatedNullable = (): void => _test_is(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(
    ArrayRepeatedNullable
)(typia.createIs<ArrayRepeatedNullable>());
