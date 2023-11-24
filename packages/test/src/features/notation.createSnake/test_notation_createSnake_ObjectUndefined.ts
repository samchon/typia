import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_createValidateSnake_ObjectUndefined =
  _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )<typia.SnakeCase<ObjectUndefined>>({
    convert: typia.notations.createValidateSnake<ObjectUndefined>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectUndefined>>(),
  });
