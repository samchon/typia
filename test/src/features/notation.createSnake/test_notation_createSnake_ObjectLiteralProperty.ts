import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_createValidateSnake_ObjectLiteralProperty =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)<
      typia.SnakeCase<ObjectLiteralProperty>
    >({
      convert: typia.notations.createValidateSnake<ObjectLiteralProperty>(),
      assert: typia.createAssert<typia.SnakeCase<ObjectLiteralProperty>>(),
    });
