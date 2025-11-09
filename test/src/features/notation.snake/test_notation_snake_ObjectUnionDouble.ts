import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_notation_validateSnake_ObjectUnionDouble = (): void =>
    _test_notation_validateGeneral("ObjectUnionDouble")<ObjectUnionDouble>(
        ObjectUnionDouble
  )<typia.SnakeCase<ObjectUnionDouble>>({
    convert: (input) => typia.notations.validateSnake<ObjectUnionDouble>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionDouble>>(),
  });
