import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_validateSnake_ObjectHttpTypeTag = (): void =>
    _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag
  )<typia.SnakeCase<ObjectHttpTypeTag>>({
    convert: (input) => typia.notations.validateSnake<ObjectHttpTypeTag>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpTypeTag>>(),
  });
