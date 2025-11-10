import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_validateKebab_ObjectLiteralProperty = (): void =>
  _test_notation_validateGeneral(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)<
    typia.KebabCase<ObjectLiteralProperty>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ObjectLiteralProperty>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectLiteralProperty>>(),
  });
