import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_createValidateCamel_TypeTagMatrix =
  _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)<
    typia.CamelCase<TypeTagMatrix>
  >({
    convert: typia.notations.createValidateCamel<TypeTagMatrix>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagMatrix>>(),
  });
