import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_notation_validatePascal_DynamicConstant =
  _test_notation_validateGeneral("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )<typia.PascalCase<DynamicConstant>>({
    convert: (input) => typia.notations.validatePascal<DynamicConstant>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicConstant>>(),
  });
