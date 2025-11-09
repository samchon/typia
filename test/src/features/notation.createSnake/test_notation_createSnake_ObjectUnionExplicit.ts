import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_createValidateSnake_ObjectUnionExplicit = (): void =>
  _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )<typia.SnakeCase<ObjectUnionExplicit>>({
    convert: typia.notations.createValidateSnake<ObjectUnionExplicit>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionExplicit>>(),
  });
