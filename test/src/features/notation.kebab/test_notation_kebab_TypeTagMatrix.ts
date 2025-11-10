import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_validateKebab_TypeTagMatrix = (): void =>
  _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)<
    typia.KebabCase<TypeTagMatrix>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagMatrix>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagMatrix>>(),
  });
