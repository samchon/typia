import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_notation_createValidateSnake_ArrayRepeatedRequired =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRepeatedRequired",
    )<ArrayRepeatedRequired>(ArrayRepeatedRequired)<
      typia.SnakeCase<ArrayRepeatedRequired>
    >({
      convert: typia.notations.createValidateSnake<ArrayRepeatedRequired>(),
      assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedRequired>>(),
    });
