import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createValidate_ArrayRepeatedNullable = _test_validate(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
  typia.createValidate<ArrayRepeatedNullable>(),
);
