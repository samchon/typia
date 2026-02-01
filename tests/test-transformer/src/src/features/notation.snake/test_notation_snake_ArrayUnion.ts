import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_validateSnake_ArrayUnion = (): void =>
    _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(
        ArrayUnion
  )<typia.SnakeCase<ArrayUnion>>({
    convert: (input) => typia.notations.validateSnake<ArrayUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayUnion>>(),
  });
