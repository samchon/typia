import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_notation_createValidateCamel_ConstantEnumeration =
    _test_notation_validateGeneral("ConstantEnumeration")<ConstantEnumeration>(
        ConstantEnumeration
    )<typia.CamelCase<ConstantEnumeration>>({
        convert: (input) => typia.notations.validateCamel<ConstantEnumeration>(input),
        assert: typia.createAssert<typia.CamelCase<ConstantEnumeration>>(),
    });
