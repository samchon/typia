import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_createValidateSnake_ObjectHttpTypeTag = (): void =>
    _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag
  )<typia.SnakeCase<ObjectHttpTypeTag>>({
    convert: typia.notations.createValidateSnake<ObjectHttpTypeTag>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpTypeTag>>(),
  });
