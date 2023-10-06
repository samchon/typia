import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_notation_validatePascal_ArrayRepeatedNullable =
    _test_notation_validateGeneral("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
        ArrayRepeatedNullable
    )<typia.PascalCase<ArrayRepeatedNullable>>({
        convert: typia.notations.createValidatePascal<ArrayRepeatedNullable>(),
        assert: typia.createAssert<typia.PascalCase<ArrayRepeatedNullable>>(),
    });
