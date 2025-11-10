import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_createValidateKebab_TypeTagDefault = (): void =>
  _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )<typia.KebabCase<TypeTagDefault>>({
    convert: typia.notations.createValidateKebab<TypeTagDefault>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagDefault>>(),
  });
