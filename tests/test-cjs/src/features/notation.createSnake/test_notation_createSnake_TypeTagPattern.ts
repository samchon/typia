import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_createValidateSnake_TypeTagPattern = (): void =>
  _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )<typia.SnakeCase<TypeTagPattern>>({
    convert: typia.notations.createValidateSnake<TypeTagPattern>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagPattern>>(),
  });
