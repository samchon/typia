import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_notation_validateKebab_ArrayAtomicAlias = (): void =>
  _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )<typia.KebabCase<ArrayAtomicAlias>>({
    convert: (input) => typia.notations.validateKebab<ArrayAtomicAlias>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayAtomicAlias>>(),
  });
