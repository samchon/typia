import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_validateSnake_ObjectNullable = (): void =>
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.SnakeCase<ObjectNullable>>({
    convert: (input) => typia.notations.validateSnake<ObjectNullable>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectNullable>>(),
  });
