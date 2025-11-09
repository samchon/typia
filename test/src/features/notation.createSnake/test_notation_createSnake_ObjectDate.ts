import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_createValidateSnake_ObjectDate = (): void =>
    _test_notation_validateGeneral("ObjectDate")<ObjectDate>(
        ObjectDate
  )<typia.SnakeCase<ObjectDate>>({
    convert: typia.notations.createValidateSnake<ObjectDate>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectDate>>(),
  });
