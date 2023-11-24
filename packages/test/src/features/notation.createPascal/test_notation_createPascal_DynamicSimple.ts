import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_notation_createValidatePascal_DynamicSimple =
  _test_notation_validateGeneral("DynamicSimple")<DynamicSimple>(DynamicSimple)<
    typia.PascalCase<DynamicSimple>
  >({
    convert: typia.notations.createValidatePascal<DynamicSimple>(),
    assert: typia.createAssert<typia.PascalCase<DynamicSimple>>(),
  });
