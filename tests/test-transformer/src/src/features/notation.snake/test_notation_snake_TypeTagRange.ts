import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_validateSnake_TypeTagRange = (): void =>
    _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(
        TypeTagRange
  )<typia.SnakeCase<TypeTagRange>>({
    convert: (input) => typia.notations.validateSnake<TypeTagRange>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagRange>>(),
  });
