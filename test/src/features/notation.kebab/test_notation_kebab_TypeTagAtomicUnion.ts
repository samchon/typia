import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_notation_validateKebab_TypeTagAtomicUnion = (): void =>
  _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )<typia.KebabCase<TypeTagAtomicUnion>>({
    convert: (input) =>
      typia.notations.validateKebab<TypeTagAtomicUnion>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagAtomicUnion>>(),
  });
