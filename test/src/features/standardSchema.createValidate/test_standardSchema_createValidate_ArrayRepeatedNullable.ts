import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_standardSchema_createValidate_ArrayRepeatedNullable =
  (): void =>
    _test_standardSchema_validate(
      "ArrayRepeatedNullable",
    )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
      typia.createValidate<ArrayRepeatedNullable>(),
    );
