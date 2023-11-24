import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_validateSnake_ObjectSimple =
  _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.SnakeCase<ObjectSimple>
  >({
    convert: (input) => typia.notations.validateSnake<ObjectSimple>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectSimple>>(),
  });
