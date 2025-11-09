import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_validatePascal_ConstantConstEnumeration = (): void =>
    _test_notation_validateGeneral("ConstantConstEnumeration")<ConstantConstEnumeration>(
        ConstantConstEnumeration
  )<typia.PascalCase<ConstantConstEnumeration>>({
    convert: (input) => typia.notations.validatePascal<ConstantConstEnumeration>(input),
    assert: typia.createAssert<typia.PascalCase<ConstantConstEnumeration>>(),
  });
