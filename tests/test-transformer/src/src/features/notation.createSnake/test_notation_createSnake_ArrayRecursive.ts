import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_createValidateSnake_ArrayRecursive = (): void =>
    _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive
  )<typia.SnakeCase<ArrayRecursive>>({
    convert: typia.notations.createValidateSnake<ArrayRecursive>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayRecursive>>(),
  });
