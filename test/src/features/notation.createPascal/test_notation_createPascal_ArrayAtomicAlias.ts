import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_notation_createValidatePascal_ArrayAtomicAlias = (): void =>
    _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
        ArrayAtomicAlias
  )<typia.PascalCase<ArrayAtomicAlias>>({
    convert: typia.notations.createValidatePascal<ArrayAtomicAlias>(),
    assert: typia.createAssert<typia.PascalCase<ArrayAtomicAlias>>(),
  });
