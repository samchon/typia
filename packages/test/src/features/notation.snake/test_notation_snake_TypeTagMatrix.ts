import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_validateSnake_TypeTagMatrix =
  _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)<
    typia.SnakeCase<TypeTagMatrix>
  >({
    convert: (input) => typia.notations.validateSnake<TypeTagMatrix>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagMatrix>>(),
  });
