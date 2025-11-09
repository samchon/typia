import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_createValidateCamel_TypeTagLength = (): void =>
    _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(
        TypeTagLength
  )<typia.CamelCase<TypeTagLength>>({
    convert: typia.notations.createValidateCamel<TypeTagLength>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagLength>>(),
  });
