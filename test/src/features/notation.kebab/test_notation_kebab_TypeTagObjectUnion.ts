import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_validateKebab_TypeTagObjectUnion = (): void =>
  _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )<typia.KebabCase<TypeTagObjectUnion>>({
    convert: (input) =>
      typia.notations.validateKebab<TypeTagObjectUnion>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagObjectUnion>>(),
  });
