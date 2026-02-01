import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_validateSnake_ObjectHttpArray = (): void =>
    _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray
  )<typia.SnakeCase<ObjectHttpArray>>({
    convert: (input) => typia.notations.validateSnake<ObjectHttpArray>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpArray>>(),
  });
