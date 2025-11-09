import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_createValidateSnake_ObjectSimple = (): void =>
    _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(
        ObjectSimple
  )<typia.SnakeCase<ObjectSimple>>({
    convert: typia.notations.createValidateSnake<ObjectSimple>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectSimple>>(),
  });
