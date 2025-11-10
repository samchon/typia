import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_createValidateKebab_ObjectLiteralProperty =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)<
      typia.KebabCase<ObjectLiteralProperty>
    >({
      convert: typia.notations.createValidateKebab<ObjectLiteralProperty>(),
      assert: typia.createAssert<typia.KebabCase<ObjectLiteralProperty>>(),
    });
