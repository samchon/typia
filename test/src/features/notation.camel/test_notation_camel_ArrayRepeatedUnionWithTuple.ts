import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_validateCamel_ArrayRepeatedUnionWithTuple = (): void =>
    _test_notation_validateGeneral("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
        ArrayRepeatedUnionWithTuple
  )<typia.CamelCase<ArrayRepeatedUnionWithTuple>>({
    convert: (input) => typia.notations.validateCamel<ArrayRepeatedUnionWithTuple>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedUnionWithTuple>>(),
  });
