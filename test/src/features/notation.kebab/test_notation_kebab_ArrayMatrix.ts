import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_validateKebab_ArrayMatrix = (): void =>
  _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)<
    typia.KebabCase<ArrayMatrix>
  >({
    convert: (input) => typia.notations.validateKebab<ArrayMatrix>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayMatrix>>(),
  });
