import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_createValidatePascal_ArrayMatrix =
    _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(
        ArrayMatrix
    )<typia.PascalCase<ArrayMatrix>>({
        convert: (input) => typia.notations.validatePascal<ArrayMatrix>(input),
        assert: typia.createAssert<typia.PascalCase<ArrayMatrix>>(),
    });
