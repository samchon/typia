import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_createValidateCamel_ArrayRepeatedUnion = (): void =>
  _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )<typia.CamelCase<ArrayRepeatedUnion>>({
    convert: typia.notations.createValidateCamel<ArrayRepeatedUnion>(),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedUnion>>(),
  });
