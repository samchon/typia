import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_notation_createValidateCamel_DynamicNever =
  _test_notation_validateGeneral("DynamicNever")<DynamicNever>(DynamicNever)<
    typia.CamelCase<DynamicNever>
  >({
    convert: typia.notations.createValidateCamel<DynamicNever>(),
    assert: typia.createAssert<typia.CamelCase<DynamicNever>>(),
  });
