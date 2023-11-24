import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_notation_validateCamel_DynamicConstant =
  _test_notation_validateGeneral("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )<typia.CamelCase<DynamicConstant>>({
    convert: (input) => typia.notations.validateCamel<DynamicConstant>(input),
    assert: typia.createAssert<typia.CamelCase<DynamicConstant>>(),
  });
