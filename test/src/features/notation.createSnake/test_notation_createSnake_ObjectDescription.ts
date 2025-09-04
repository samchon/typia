import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_notation_createValidateSnake_ObjectDescription = (): void =>
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.SnakeCase<ObjectDescription>>({
    convert: typia.notations.createValidateSnake<ObjectDescription>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectDescription>>(),
  });
