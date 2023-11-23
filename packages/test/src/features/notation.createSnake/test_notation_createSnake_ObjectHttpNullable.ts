import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_createValidateSnake_ObjectHttpNullable =
  _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )<typia.SnakeCase<ObjectHttpNullable>>({
    convert: typia.notations.createValidateSnake<ObjectHttpNullable>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpNullable>>(),
  });
