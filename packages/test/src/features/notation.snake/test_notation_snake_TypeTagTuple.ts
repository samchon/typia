import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_notation_validateSnake_TypeTagTuple =
  _test_notation_validateGeneral("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)<
    typia.SnakeCase<TypeTagTuple>
  >({
    convert: (input) => typia.notations.validateSnake<TypeTagTuple>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagTuple>>(),
  });
