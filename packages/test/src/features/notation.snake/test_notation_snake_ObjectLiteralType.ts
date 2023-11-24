import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_notation_validateSnake_ObjectLiteralType =
  _test_notation_validateGeneral("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )<typia.SnakeCase<ObjectLiteralType>>({
    convert: (input) => typia.notations.validateSnake<ObjectLiteralType>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectLiteralType>>(),
  });
