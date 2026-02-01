import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_createValidateSnake_TypeTagRange = (): void =>
    _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(
        TypeTagRange
  )<typia.SnakeCase<TypeTagRange>>({
    convert: typia.notations.createValidateSnake<TypeTagRange>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagRange>>(),
  });
