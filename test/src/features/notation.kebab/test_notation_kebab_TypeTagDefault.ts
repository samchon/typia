import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_validateKebab_TypeTagDefault = (): void =>
  _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )<typia.KebabCase<TypeTagDefault>>({
    convert: (input) => typia.notations.validateKebab<TypeTagDefault>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagDefault>>(),
  });
