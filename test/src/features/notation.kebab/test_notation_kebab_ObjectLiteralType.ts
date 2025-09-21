import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_notation_validateKebab_ObjectLiteralType = (): void =>
  _test_notation_validateGeneral("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )<typia.KebabCase<ObjectLiteralType>>({
    convert: (input) => typia.notations.validateKebab<ObjectLiteralType>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectLiteralType>>(),
  });
