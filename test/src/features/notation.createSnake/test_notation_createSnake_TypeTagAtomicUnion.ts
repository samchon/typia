import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_notation_createValidateSnake_TypeTagAtomicUnion = (): void =>
    _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion
  )<typia.SnakeCase<TypeTagAtomicUnion>>({
    convert: typia.notations.createValidateSnake<TypeTagAtomicUnion>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagAtomicUnion>>(),
  });
