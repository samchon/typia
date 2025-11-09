import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_createValidateSnake_SetSimple = (): void =>
    _test_notation_validateGeneral("SetSimple")<SetSimple>(
        SetSimple
  )<typia.SnakeCase<SetSimple>>({
    convert: typia.notations.createValidateSnake<SetSimple>(),
    assert: typia.createAssert<typia.SnakeCase<SetSimple>>(),
  });
