import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_notation_createValidateCamel_ArrayRepeatedNullable =
  _test_notation_validateGeneral(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
    typia.CamelCase<ArrayRepeatedNullable>
  >({
    convert: typia.notations.createValidateCamel<ArrayRepeatedNullable>(),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedNullable>>(),
  });
