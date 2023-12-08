import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_createValidateSnake_ArrayRepeatedOptional =
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.SnakeCase<ArrayRepeatedOptional>
  >({
    convert: typia.notations.createValidateSnake<ArrayRepeatedOptional>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedOptional>>(),
  });
