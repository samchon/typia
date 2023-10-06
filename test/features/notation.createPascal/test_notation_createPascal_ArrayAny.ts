import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_notation_createValidatePascal_ArrayAny =
    _test_notation_validateGeneral("ArrayAny")<ArrayAny>(
        ArrayAny
    )<typia.PascalCase<ArrayAny>>({
        convert: (input) => typia.notations.validatePascal<ArrayAny>(input),
        assert: typia.createAssert<typia.PascalCase<ArrayAny>>(),
    });
