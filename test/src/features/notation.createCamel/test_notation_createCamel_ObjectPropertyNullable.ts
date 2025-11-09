import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_createValidateCamel_ObjectPropertyNullable = (): void =>
    _test_notation_validateGeneral("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable
  )<typia.CamelCase<ObjectPropertyNullable>>({
    convert: typia.notations.createValidateCamel<ObjectPropertyNullable>(),
    assert: typia.createAssert<typia.CamelCase<ObjectPropertyNullable>>(),
  });
