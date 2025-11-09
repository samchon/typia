import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_notation_validateSnake_ObjectDynamic = (): void =>
  _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)<
    typia.SnakeCase<ObjectDynamic>
  >({
    convert: (input) => typia.notations.validateSnake<ObjectDynamic>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectDynamic>>(),
  });
