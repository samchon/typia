import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_validateSnake_TypeTagArray = (): void =>
    _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(
        TypeTagArray
  )<typia.SnakeCase<TypeTagArray>>({
    convert: (input) => typia.notations.validateSnake<TypeTagArray>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagArray>>(),
  });
