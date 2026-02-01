import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_validateSnake_ObjectGenericArray = (): void =>
    _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray
  )<typia.SnakeCase<ObjectGenericArray>>({
    convert: (input) => typia.notations.validateSnake<ObjectGenericArray>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectGenericArray>>(),
  });
