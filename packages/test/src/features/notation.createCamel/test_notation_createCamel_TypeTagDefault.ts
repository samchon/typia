import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_createValidateCamel_TypeTagDefault =
  _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )<typia.CamelCase<TypeTagDefault>>({
    convert: typia.notations.createValidateCamel<TypeTagDefault>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagDefault>>(),
  });
