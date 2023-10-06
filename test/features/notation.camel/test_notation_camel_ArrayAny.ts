import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_notation_validateCamel_ArrayAny =
    _test_notation_validateGeneral("ArrayAny")<ArrayAny>(
        ArrayAny
    )<typia.CamelCase<ArrayAny>>({
        convert: typia.notations.createValidateCamel<ArrayAny>(),
        assert: typia.createAssert<typia.CamelCase<ArrayAny>>(),
    });
