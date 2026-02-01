import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_notation_createValidateSnake_TypeTagBigInt = (): void =>
    _test_notation_validateGeneral("TypeTagBigInt")<TypeTagBigInt>(
        TypeTagBigInt
  )<typia.SnakeCase<TypeTagBigInt>>({
    convert: typia.notations.createValidateSnake<TypeTagBigInt>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagBigInt>>(),
  });
