import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_notation_createValidateCamel_DynamicUndefined =
  _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )<typia.CamelCase<DynamicUndefined>>({
    convert: typia.notations.createValidateCamel<DynamicUndefined>(),
    assert: typia.createAssert<typia.CamelCase<DynamicUndefined>>(),
  });
