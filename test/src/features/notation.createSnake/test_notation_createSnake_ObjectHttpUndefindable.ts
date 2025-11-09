import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_createValidateSnake_ObjectHttpUndefindable = (): void =>
    _test_notation_validateGeneral("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable
  )<typia.SnakeCase<ObjectHttpUndefindable>>({
    convert: typia.notations.createValidateSnake<ObjectHttpUndefindable>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpUndefindable>>(),
  });
