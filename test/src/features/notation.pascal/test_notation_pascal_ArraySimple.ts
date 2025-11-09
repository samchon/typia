import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_validatePascal_ArraySimple = (): void =>
    _test_notation_validateGeneral("ArraySimple")<ArraySimple>(
        ArraySimple
  )<typia.PascalCase<ArraySimple>>({
    convert: (input) => typia.notations.validatePascal<ArraySimple>(input),
    assert: typia.createAssert<typia.PascalCase<ArraySimple>>(),
  });
