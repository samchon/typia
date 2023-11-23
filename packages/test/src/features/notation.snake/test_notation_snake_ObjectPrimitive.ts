import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_notation_validateSnake_ObjectPrimitive =
  _test_notation_validateGeneral("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )<typia.SnakeCase<ObjectPrimitive>>({
    convert: (input) => typia.notations.validateSnake<ObjectPrimitive>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectPrimitive>>(),
  });
