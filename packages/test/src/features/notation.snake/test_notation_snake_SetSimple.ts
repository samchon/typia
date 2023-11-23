import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_validateSnake_SetSimple =
  _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
    typia.SnakeCase<SetSimple>
  >({
    convert: (input) => typia.notations.validateSnake<SetSimple>(input),
    assert: typia.createAssert<typia.SnakeCase<SetSimple>>(),
  });
