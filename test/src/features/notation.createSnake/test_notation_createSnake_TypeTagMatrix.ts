import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_createValidateSnake_TypeTagMatrix = (): void =>
  _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)<
    typia.SnakeCase<TypeTagMatrix>
  >({
    convert: typia.notations.createValidateSnake<TypeTagMatrix>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagMatrix>>(),
  });
