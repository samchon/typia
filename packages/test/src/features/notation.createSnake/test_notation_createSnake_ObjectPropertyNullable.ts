import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_createValidateSnake_ObjectPropertyNullable =
  _test_notation_validateGeneral(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)<
    typia.SnakeCase<ObjectPropertyNullable>
  >({
    convert: typia.notations.createValidateSnake<ObjectPropertyNullable>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectPropertyNullable>>(),
  });
