import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_createValidatePascal_TypeTagObjectUnion = (): void =>
    _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
        TypeTagObjectUnion
  )<typia.PascalCase<TypeTagObjectUnion>>({
    convert: typia.notations.createValidatePascal<TypeTagObjectUnion>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagObjectUnion>>(),
  });
