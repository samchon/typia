import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_notation_createValidateCamel_FunctionalValue =
    _test_notation_validateGeneral("FunctionalValue")<FunctionalValue>(
        FunctionalValue
    )<typia.CamelCase<FunctionalValue>>({
        convert: (input) => typia.notations.validateCamel<FunctionalValue>(input),
        assert: typia.createAssert<typia.CamelCase<FunctionalValue>>(),
    });
