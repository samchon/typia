import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_notation_validatePascal_ConstantEnumeration = (): void =>
    _test_notation_validateGeneral("ConstantEnumeration")<ConstantEnumeration>(
        ConstantEnumeration
  )<typia.PascalCase<ConstantEnumeration>>({
    convert: (input) => typia.notations.validatePascal<ConstantEnumeration>(input),
    assert: typia.createAssert<typia.PascalCase<ConstantEnumeration>>(),
  });
