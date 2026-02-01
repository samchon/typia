import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_validateCamel_ObjectLiteralProperty = (): void =>
    _test_notation_validateGeneral("ObjectLiteralProperty")<ObjectLiteralProperty>(
        ObjectLiteralProperty
  )<typia.CamelCase<ObjectLiteralProperty>>({
    convert: (input) => typia.notations.validateCamel<ObjectLiteralProperty>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectLiteralProperty>>(),
  });
