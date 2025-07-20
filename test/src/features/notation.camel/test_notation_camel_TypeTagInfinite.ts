import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_notation_validateCamel_TypeTagInfinite = (): void =>
  _test_notation_validateGeneral("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )<typia.CamelCase<TypeTagInfinite>>({
    convert: (input) => typia.notations.validateCamel<TypeTagInfinite>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagInfinite>>(),
  });
