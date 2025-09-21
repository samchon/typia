import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_notation_createValidateKebab_TypeTagInfinite = (): void =>
  _test_notation_validateGeneral("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )<typia.KebabCase<TypeTagInfinite>>({
    convert: typia.notations.createValidateKebab<TypeTagInfinite>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagInfinite>>(),
  });
