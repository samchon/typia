import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_validateSnake_ArraySimple = (): void =>
  _test_notation_validateGeneral("ArraySimple")<ArraySimple>(ArraySimple)<
    typia.SnakeCase<ArraySimple>
  >({
    convert: (input) => typia.notations.validateSnake<ArraySimple>(input),
    assert: typia.createAssert<typia.SnakeCase<ArraySimple>>(),
  });
