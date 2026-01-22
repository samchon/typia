import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_notation_validateSnake_ArrayRepeatedNullable = (): void =>
  _test_notation_validateGeneral(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
    typia.SnakeCase<ArrayRepeatedNullable>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArrayRepeatedNullable>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedNullable>>(),
  });
