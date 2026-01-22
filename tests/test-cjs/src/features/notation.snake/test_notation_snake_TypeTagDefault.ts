import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_validateSnake_TypeTagDefault = (): void =>
  _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )<typia.SnakeCase<TypeTagDefault>>({
    convert: (input) => typia.notations.validateSnake<TypeTagDefault>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagDefault>>(),
  });
