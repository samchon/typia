import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_createValidatePascal_ArrayMatrix = (): void =>
    _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(
        ArrayMatrix
  )<typia.PascalCase<ArrayMatrix>>({
    convert: typia.notations.createValidatePascal<ArrayMatrix>(),
    assert: typia.createAssert<typia.PascalCase<ArrayMatrix>>(),
  });
