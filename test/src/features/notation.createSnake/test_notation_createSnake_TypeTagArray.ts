import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_createValidateSnake_TypeTagArray = (): void =>
    _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(
        TypeTagArray
  )<typia.SnakeCase<TypeTagArray>>({
    convert: typia.notations.createValidateSnake<TypeTagArray>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagArray>>(),
  });
