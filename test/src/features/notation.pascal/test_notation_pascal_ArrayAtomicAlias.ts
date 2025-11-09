import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_notation_validatePascal_ArrayAtomicAlias = (): void =>
    _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
        ArrayAtomicAlias
  )<typia.PascalCase<ArrayAtomicAlias>>({
    convert: (input) => typia.notations.validatePascal<ArrayAtomicAlias>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayAtomicAlias>>(),
  });
