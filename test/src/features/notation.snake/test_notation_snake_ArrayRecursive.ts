import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_validateSnake_ArrayRecursive =
  _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )<typia.SnakeCase<ArrayRecursive>>({
    convert: (input) => typia.notations.validateSnake<ArrayRecursive>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayRecursive>>(),
  });
