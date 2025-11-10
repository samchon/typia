import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_createValidateKebab_TypeTagObjectUnion = (): void =>
  _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )<typia.KebabCase<TypeTagObjectUnion>>({
    convert: typia.notations.createValidateKebab<TypeTagObjectUnion>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagObjectUnion>>(),
  });
