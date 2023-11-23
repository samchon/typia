import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_validateSnake_ObjectJsonTag =
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.SnakeCase<ObjectJsonTag>
  >({
    convert: (input) => typia.notations.validateSnake<ObjectJsonTag>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectJsonTag>>(),
  });
