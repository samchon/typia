import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_notation_validateSnake_ArrayAtomicAlias = (): void =>
    _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
        ArrayAtomicAlias
  )<typia.SnakeCase<ArrayAtomicAlias>>({
    convert: (input) => typia.notations.validateSnake<ArrayAtomicAlias>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayAtomicAlias>>(),
  });
