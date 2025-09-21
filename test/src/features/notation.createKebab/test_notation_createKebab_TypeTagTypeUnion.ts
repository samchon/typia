import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_notation_createValidateKebab_TypeTagTypeUnion = (): void =>
  _test_notation_validateGeneral("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )<typia.KebabCase<TypeTagTypeUnion>>({
    convert: typia.notations.createValidateKebab<TypeTagTypeUnion>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagTypeUnion>>(),
  });
