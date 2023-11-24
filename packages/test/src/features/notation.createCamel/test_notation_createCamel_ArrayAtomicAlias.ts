import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_notation_createValidateCamel_ArrayAtomicAlias =
  _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )<typia.CamelCase<ArrayAtomicAlias>>({
    convert: typia.notations.createValidateCamel<ArrayAtomicAlias>(),
    assert: typia.createAssert<typia.CamelCase<ArrayAtomicAlias>>(),
  });
