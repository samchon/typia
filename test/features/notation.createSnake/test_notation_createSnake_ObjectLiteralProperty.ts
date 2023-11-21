import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_createValidateSnake_ObjectLiteralProperty =
  _test_notation_validateGeneral(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)<
    typia.SnakeCase<ObjectLiteralProperty>
  >({
    convert: typia.notations.createValidateSnake<ObjectLiteralProperty>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectLiteralProperty>>(),
  });
