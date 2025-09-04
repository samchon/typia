import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_createValidateStringify_ArrayRepeatedNullable =
  (): void =>
    _test_json_validateStringify(
      "ArrayRepeatedNullable",
    )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
      typia.json.createValidateStringify<ArrayRepeatedNullable>(),
    );
