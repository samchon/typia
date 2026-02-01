import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_validateSnake_ObjectDate = (): void =>
    _test_notation_validateGeneral("ObjectDate")<ObjectDate>(
        ObjectDate
  )<typia.SnakeCase<ObjectDate>>({
    convert: (input) => typia.notations.validateSnake<ObjectDate>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectDate>>(),
  });
