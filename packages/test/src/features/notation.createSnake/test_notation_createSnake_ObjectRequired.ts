import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_createValidateSnake_ObjectRequired =
  _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )<typia.SnakeCase<ObjectRequired>>({
    convert: typia.notations.createValidateSnake<ObjectRequired>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectRequired>>(),
  });
