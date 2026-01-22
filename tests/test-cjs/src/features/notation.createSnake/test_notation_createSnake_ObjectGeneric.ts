import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_createValidateSnake_ObjectGeneric = (): void =>
  _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)<
    typia.SnakeCase<ObjectGeneric>
  >({
    convert: typia.notations.createValidateSnake<ObjectGeneric>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectGeneric>>(),
  });
