import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_createValidateSnake_TypeTagFormat = (): void =>
  _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)<
    typia.SnakeCase<TypeTagFormat>
  >({
    convert: typia.notations.createValidateSnake<TypeTagFormat>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagFormat>>(),
  });
