import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_notation_createValidatePascal_ArrayAny = (): void =>
  _test_notation_validateGeneral("ArrayAny")<ArrayAny>(ArrayAny)<
    typia.PascalCase<ArrayAny>
  >({
    convert: typia.notations.createValidatePascal<ArrayAny>(),
    assert: typia.createAssert<typia.PascalCase<ArrayAny>>(),
  });
