import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_notation_createValidatePascal_FunctionalArray =
    _test_notation_validateGeneral("FunctionalArray")<FunctionalArray>(
        FunctionalArray
    )<typia.PascalCase<FunctionalArray>>({
        convert: (input) => typia.notations.validatePascal<FunctionalArray>(input),
        assert: typia.createAssert<typia.PascalCase<FunctionalArray>>(),
    });
