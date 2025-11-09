import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_validateSnake_TypeTagRangeBigInt = (): void =>
    _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt
  )<typia.SnakeCase<TypeTagRangeBigInt>>({
    convert: (input) => typia.notations.validateSnake<TypeTagRangeBigInt>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagRangeBigInt>>(),
  });
