import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_validateSnake_ObjectDescription =
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.SnakeCase<ObjectDescription>>({
    convert: (input) => typia.notations.validateSnake<ObjectDescription>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectDescription>>(),
  });
