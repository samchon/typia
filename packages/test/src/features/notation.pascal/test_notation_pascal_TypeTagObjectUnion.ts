import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_validatePascal_TypeTagObjectUnion =
  _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )<typia.PascalCase<TypeTagObjectUnion>>({
    convert: (input) =>
      typia.notations.validatePascal<TypeTagObjectUnion>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagObjectUnion>>(),
  });
