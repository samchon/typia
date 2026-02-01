import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_createValidateCamel_TypeTagFormat = (): void =>
    _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(
        TypeTagFormat
  )<typia.CamelCase<TypeTagFormat>>({
    convert: typia.notations.createValidateCamel<TypeTagFormat>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagFormat>>(),
  });
