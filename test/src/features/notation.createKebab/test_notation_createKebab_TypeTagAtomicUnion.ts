import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_notation_createValidateKebab_TypeTagAtomicUnion = (): void =>
  _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )<typia.KebabCase<TypeTagAtomicUnion>>({
    convert: typia.notations.createValidateKebab<TypeTagAtomicUnion>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagAtomicUnion>>(),
  });
