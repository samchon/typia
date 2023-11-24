import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_notation_validateSnake_TypeTagTypeBigInt =
  _test_notation_validateGeneral("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )<typia.SnakeCase<TypeTagTypeBigInt>>({
    convert: (input) => typia.notations.validateSnake<TypeTagTypeBigInt>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagTypeBigInt>>(),
  });
