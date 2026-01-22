import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_notation_createValidateSnake_ObjectUnionDouble = (): void =>
  _test_notation_validateGeneral("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )<typia.SnakeCase<ObjectUnionDouble>>({
    convert: typia.notations.createValidateSnake<ObjectUnionDouble>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionDouble>>(),
  });
