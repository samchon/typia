import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_validateKebab_TypeTagPattern = (): void =>
  _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )<typia.KebabCase<TypeTagPattern>>({
    convert: (input) => typia.notations.validateKebab<TypeTagPattern>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagPattern>>(),
  });
