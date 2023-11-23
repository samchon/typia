import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_notation_validatePascal_DynamicEnumeration =
  _test_notation_validateGeneral("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )<typia.PascalCase<DynamicEnumeration>>({
    convert: (input) =>
      typia.notations.validatePascal<DynamicEnumeration>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicEnumeration>>(),
  });
