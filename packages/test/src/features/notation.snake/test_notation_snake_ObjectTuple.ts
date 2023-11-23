import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_notation_validateSnake_ObjectTuple =
  _test_notation_validateGeneral("ObjectTuple")<ObjectTuple>(ObjectTuple)<
    typia.SnakeCase<ObjectTuple>
  >({
    convert: (input) => typia.notations.validateSnake<ObjectTuple>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectTuple>>(),
  });
