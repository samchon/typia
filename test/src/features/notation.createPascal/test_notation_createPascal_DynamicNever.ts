import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_notation_createValidatePascal_DynamicNever =
  _test_notation_validateGeneral("DynamicNever")<DynamicNever>(DynamicNever)<
    typia.PascalCase<DynamicNever>
  >({
    convert: typia.notations.createValidatePascal<DynamicNever>(),
    assert: typia.createAssert<typia.PascalCase<DynamicNever>>(),
  });
