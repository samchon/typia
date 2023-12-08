import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_createValidateCamel_TypeTagPattern =
  _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )<typia.CamelCase<TypeTagPattern>>({
    convert: typia.notations.createValidateCamel<TypeTagPattern>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagPattern>>(),
  });
