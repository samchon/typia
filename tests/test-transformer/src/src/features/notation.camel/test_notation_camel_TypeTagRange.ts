import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_validateCamel_TypeTagRange = (): void =>
    _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(
        TypeTagRange
  )<typia.CamelCase<TypeTagRange>>({
    convert: (input) => typia.notations.validateCamel<TypeTagRange>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagRange>>(),
  });
