import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_notation_createValidatePascal_ObjectLiteralType = (): void =>
    _test_notation_validateGeneral("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType
  )<typia.PascalCase<ObjectLiteralType>>({
    convert: typia.notations.createValidatePascal<ObjectLiteralType>(),
    assert: typia.createAssert<typia.PascalCase<ObjectLiteralType>>(),
  });
