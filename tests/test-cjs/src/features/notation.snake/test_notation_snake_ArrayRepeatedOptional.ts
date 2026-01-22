import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_validateSnake_ArrayRepeatedOptional = (): void =>
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.SnakeCase<ArrayRepeatedOptional>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArrayRepeatedOptional>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedOptional>>(),
  });
