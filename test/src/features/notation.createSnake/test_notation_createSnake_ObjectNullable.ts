import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_createValidateSnake_ObjectNullable = (): void =>
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.SnakeCase<ObjectNullable>>({
    convert: typia.notations.createValidateSnake<ObjectNullable>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectNullable>>(),
  });
