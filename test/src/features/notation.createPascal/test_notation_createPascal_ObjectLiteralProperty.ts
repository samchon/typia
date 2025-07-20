import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_createValidatePascal_ObjectLiteralProperty =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)<
      typia.PascalCase<ObjectLiteralProperty>
    >({
      convert: typia.notations.createValidatePascal<ObjectLiteralProperty>(),
      assert: typia.createAssert<typia.PascalCase<ObjectLiteralProperty>>(),
    });
