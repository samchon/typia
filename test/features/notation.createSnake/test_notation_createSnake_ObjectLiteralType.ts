import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_notation_createValidateSnake_ObjectLiteralType =
  _test_notation_validateGeneral("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )<typia.SnakeCase<ObjectLiteralType>>({
    convert: typia.notations.createValidateSnake<ObjectLiteralType>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectLiteralType>>(),
  });
