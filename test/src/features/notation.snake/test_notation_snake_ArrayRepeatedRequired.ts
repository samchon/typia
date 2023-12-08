import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_notation_validateSnake_ArrayRepeatedRequired =
  _test_notation_validateGeneral(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)<
    typia.SnakeCase<ArrayRepeatedRequired>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArrayRepeatedRequired>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedRequired>>(),
  });
