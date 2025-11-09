import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_validateSnake_ObjectPartial = (): void =>
    _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(
        ObjectPartial
  )<typia.SnakeCase<ObjectPartial>>({
    convert: (input) => typia.notations.validateSnake<ObjectPartial>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectPartial>>(),
  });
