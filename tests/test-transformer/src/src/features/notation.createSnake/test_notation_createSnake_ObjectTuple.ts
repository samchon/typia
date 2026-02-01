import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_notation_createValidateSnake_ObjectTuple = (): void =>
    _test_notation_validateGeneral("ObjectTuple")<ObjectTuple>(
        ObjectTuple
  )<typia.SnakeCase<ObjectTuple>>({
    convert: typia.notations.createValidateSnake<ObjectTuple>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectTuple>>(),
  });
