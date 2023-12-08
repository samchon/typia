import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_notation_createValidatePascal_DynamicUndefined =
  _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )<typia.PascalCase<DynamicUndefined>>({
    convert: typia.notations.createValidatePascal<DynamicUndefined>(),
    assert: typia.createAssert<typia.PascalCase<DynamicUndefined>>(),
  });
