import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_createValidatePascal_ConstantConstEnumeration = (): void =>
    _test_notation_validateGeneral("ConstantConstEnumeration")<ConstantConstEnumeration>(
        ConstantConstEnumeration
  )<typia.PascalCase<ConstantConstEnumeration>>({
    convert: typia.notations.createValidatePascal<ConstantConstEnumeration>(),
    assert: typia.createAssert<typia.PascalCase<ConstantConstEnumeration>>(),
  });
