import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_createValidateKebab_TypeTagPattern = (): void =>
  _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )<typia.KebabCase<TypeTagPattern>>({
    convert: typia.notations.createValidateKebab<TypeTagPattern>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagPattern>>(),
  });
