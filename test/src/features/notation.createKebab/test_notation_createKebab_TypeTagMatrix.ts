import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_createValidateKebab_TypeTagMatrix = (): void =>
  _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)<
    typia.KebabCase<TypeTagMatrix>
  >({
    convert: typia.notations.createValidateKebab<TypeTagMatrix>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagMatrix>>(),
  });
