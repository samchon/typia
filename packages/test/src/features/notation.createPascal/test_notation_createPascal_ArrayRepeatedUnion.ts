import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_createValidatePascal_ArrayRepeatedUnion =
  _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )<typia.PascalCase<ArrayRepeatedUnion>>({
    convert: typia.notations.createValidatePascal<ArrayRepeatedUnion>(),
    assert: typia.createAssert<typia.PascalCase<ArrayRepeatedUnion>>(),
  });
