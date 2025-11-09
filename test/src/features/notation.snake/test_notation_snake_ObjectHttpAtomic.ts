import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_notation_validateSnake_ObjectHttpAtomic = (): void =>
    _test_notation_validateGeneral("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic
  )<typia.SnakeCase<ObjectHttpAtomic>>({
    convert: (input) => typia.notations.validateSnake<ObjectHttpAtomic>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpAtomic>>(),
  });
