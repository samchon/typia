import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_createValidateCamel_TypeTagRange = (): void =>
    _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(
        TypeTagRange
  )<typia.CamelCase<TypeTagRange>>({
    convert: typia.notations.createValidateCamel<TypeTagRange>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagRange>>(),
  });
