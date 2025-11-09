import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_validateSnake_TypeTagNaN = (): void =>
    _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(
        TypeTagNaN
  )<typia.SnakeCase<TypeTagNaN>>({
    convert: (input) => typia.notations.validateSnake<TypeTagNaN>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagNaN>>(),
  });
