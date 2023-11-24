import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_validatePascal_ObjectLiteralProperty =
  _test_notation_validateGeneral(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)<
    typia.PascalCase<ObjectLiteralProperty>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectLiteralProperty>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectLiteralProperty>>(),
  });
