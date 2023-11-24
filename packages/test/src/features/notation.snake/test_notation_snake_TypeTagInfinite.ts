import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_notation_validateSnake_TypeTagInfinite =
  _test_notation_validateGeneral("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )<typia.SnakeCase<TypeTagInfinite>>({
    convert: (input) => typia.notations.validateSnake<TypeTagInfinite>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagInfinite>>(),
  });
