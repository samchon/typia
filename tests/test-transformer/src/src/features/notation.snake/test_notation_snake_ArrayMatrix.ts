import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_validateSnake_ArrayMatrix = (): void =>
    _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(
        ArrayMatrix
  )<typia.SnakeCase<ArrayMatrix>>({
    convert: (input) => typia.notations.validateSnake<ArrayMatrix>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayMatrix>>(),
  });
