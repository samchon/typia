import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_validatePascal_ArrayUnion = (): void =>
    _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(
        ArrayUnion
  )<typia.PascalCase<ArrayUnion>>({
    convert: (input) => typia.notations.validatePascal<ArrayUnion>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayUnion>>(),
  });
