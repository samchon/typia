import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_validateSnake_TypeTagPattern = (): void =>
  _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )<typia.SnakeCase<TypeTagPattern>>({
    convert: (input) => typia.notations.validateSnake<TypeTagPattern>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagPattern>>(),
  });
