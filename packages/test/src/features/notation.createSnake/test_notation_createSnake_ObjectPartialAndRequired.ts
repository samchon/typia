import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_createValidateSnake_ObjectPartialAndRequired =
  _test_notation_validateGeneral(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
    typia.SnakeCase<ObjectPartialAndRequired>
  >({
    convert: typia.notations.createValidateSnake<ObjectPartialAndRequired>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectPartialAndRequired>>(),
  });
