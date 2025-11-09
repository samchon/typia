import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_validatePascal_ArrayMatrix = (): void =>
  _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)<
    typia.PascalCase<ArrayMatrix>
  >({
    convert: (input) => typia.notations.validatePascal<ArrayMatrix>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayMatrix>>(),
  });
