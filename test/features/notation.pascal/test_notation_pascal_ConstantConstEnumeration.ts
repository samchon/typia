import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_validatePascal_ConstantConstEnumeration =
    _test_notation_validateGeneral("ConstantConstEnumeration")<ConstantConstEnumeration>(
        ConstantConstEnumeration
    )<typia.PascalCase<ConstantConstEnumeration>>({
        convert: typia.notations.createValidatePascal<ConstantConstEnumeration>(),
        assert: typia.createAssert<typia.PascalCase<ConstantConstEnumeration>>(),
    });
