import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_validateCamel_TypeTagPattern =
  _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )<typia.CamelCase<TypeTagPattern>>({
    convert: (input) => typia.notations.validateCamel<TypeTagPattern>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagPattern>>(),
  });
