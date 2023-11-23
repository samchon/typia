import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_notation_validateCamel_ArrayRepeatedNullable =
  _test_notation_validateGeneral(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
    typia.CamelCase<ArrayRepeatedNullable>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ArrayRepeatedNullable>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedNullable>>(),
  });
