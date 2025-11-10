import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_createValidateKebab_ArrayMatrix = (): void =>
  _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)<
    typia.KebabCase<ArrayMatrix>
  >({
    convert: typia.notations.createValidateKebab<ArrayMatrix>(),
    assert: typia.createAssert<typia.KebabCase<ArrayMatrix>>(),
  });
