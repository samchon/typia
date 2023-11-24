import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_notation_validateCamel_ArrayAtomicAlias =
  _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )<typia.CamelCase<ArrayAtomicAlias>>({
    convert: (input) => typia.notations.validateCamel<ArrayAtomicAlias>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayAtomicAlias>>(),
  });
