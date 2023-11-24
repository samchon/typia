import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_notation_createValidateCamel_DynamicTemplate =
  _test_notation_validateGeneral("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )<typia.CamelCase<DynamicTemplate>>({
    convert: typia.notations.createValidateCamel<DynamicTemplate>(),
    assert: typia.createAssert<typia.CamelCase<DynamicTemplate>>(),
  });
