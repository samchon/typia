import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_validateSnake_ObjectLiteralProperty =
  _test_notation_validateGeneral(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)<
    typia.SnakeCase<ObjectLiteralProperty>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ObjectLiteralProperty>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectLiteralProperty>>(),
  });
