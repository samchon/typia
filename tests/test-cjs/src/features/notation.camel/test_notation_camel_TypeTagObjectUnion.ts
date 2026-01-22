import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_validateCamel_TypeTagObjectUnion = (): void =>
  _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )<typia.CamelCase<TypeTagObjectUnion>>({
    convert: (input) =>
      typia.notations.validateCamel<TypeTagObjectUnion>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagObjectUnion>>(),
  });
