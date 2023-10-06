import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_notation_createValidatePascal_FunctionalValueUnion =
    _test_notation_validateGeneral("FunctionalValueUnion")<FunctionalValueUnion>(
        FunctionalValueUnion
    )<typia.PascalCase<FunctionalValueUnion>>({
        convert: (input) => typia.notations.validatePascal<FunctionalValueUnion>(input),
        assert: typia.createAssert<typia.PascalCase<FunctionalValueUnion>>(),
    });
