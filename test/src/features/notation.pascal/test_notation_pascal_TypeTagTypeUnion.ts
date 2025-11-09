import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_notation_validatePascal_TypeTagTypeUnion = (): void =>
  _test_notation_validateGeneral("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )<typia.PascalCase<TypeTagTypeUnion>>({
    convert: (input) => typia.notations.validatePascal<TypeTagTypeUnion>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagTypeUnion>>(),
  });
