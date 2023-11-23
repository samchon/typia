import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_createValidateSnake_ObjectGenericAlias =
  _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )<typia.SnakeCase<ObjectGenericAlias>>({
    convert: typia.notations.createValidateSnake<ObjectGenericAlias>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectGenericAlias>>(),
  });
