import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_createValidateSnake_ObjectJsonTag = (): void =>
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.SnakeCase<ObjectJsonTag>
  >({
    convert: typia.notations.createValidateSnake<ObjectJsonTag>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectJsonTag>>(),
  });
