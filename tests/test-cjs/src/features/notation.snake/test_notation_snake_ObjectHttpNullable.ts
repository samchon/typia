import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_validateSnake_ObjectHttpNullable = (): void =>
  _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )<typia.SnakeCase<ObjectHttpNullable>>({
    convert: (input) =>
      typia.notations.validateSnake<ObjectHttpNullable>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpNullable>>(),
  });
