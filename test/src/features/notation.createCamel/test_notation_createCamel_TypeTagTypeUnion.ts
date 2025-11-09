import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_notation_createValidateCamel_TypeTagTypeUnion = (): void =>
    _test_notation_validateGeneral("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion
  )<typia.CamelCase<TypeTagTypeUnion>>({
    convert: typia.notations.createValidateCamel<TypeTagTypeUnion>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagTypeUnion>>(),
  });
