import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_validatePascal_ArrayRepeatedOptional = (): void =>
    _test_notation_validateGeneral("ArrayRepeatedOptional")<ArrayRepeatedOptional>(
        ArrayRepeatedOptional
  )<typia.PascalCase<ArrayRepeatedOptional>>({
    convert: (input) => typia.notations.validatePascal<ArrayRepeatedOptional>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayRepeatedOptional>>(),
  });
