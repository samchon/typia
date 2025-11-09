import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_validateCamel_TypeTagMatrix = (): void =>
    _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(
        TypeTagMatrix
  )<typia.CamelCase<TypeTagMatrix>>({
    convert: (input) => typia.notations.validateCamel<TypeTagMatrix>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagMatrix>>(),
  });
