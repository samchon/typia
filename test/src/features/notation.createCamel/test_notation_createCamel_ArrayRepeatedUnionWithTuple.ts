import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_createValidateCamel_ArrayRepeatedUnionWithTuple = (): void =>
    _test_notation_validateGeneral("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
        ArrayRepeatedUnionWithTuple
  )<typia.CamelCase<ArrayRepeatedUnionWithTuple>>({
    convert: typia.notations.createValidateCamel<ArrayRepeatedUnionWithTuple>(),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedUnionWithTuple>>(),
  });
