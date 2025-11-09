import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_notation_validateCamel_ObjectLiteralType = (): void =>
    _test_notation_validateGeneral("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType
  )<typia.CamelCase<ObjectLiteralType>>({
    convert: (input) => typia.notations.validateCamel<ObjectLiteralType>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectLiteralType>>(),
  });
