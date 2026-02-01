import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_validateCamel_TypeTagDefault = (): void =>
    _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault
  )<typia.CamelCase<TypeTagDefault>>({
    convert: (input) => typia.notations.validateCamel<TypeTagDefault>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagDefault>>(),
  });
