import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_notation_validateCamel_TypeTagAtomicUnion = (): void =>
    _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion
  )<typia.CamelCase<TypeTagAtomicUnion>>({
    convert: (input) => typia.notations.validateCamel<TypeTagAtomicUnion>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagAtomicUnion>>(),
  });
