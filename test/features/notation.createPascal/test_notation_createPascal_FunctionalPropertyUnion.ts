import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_notation_createValidatePascal_FunctionalPropertyUnion =
    _test_notation_validateGeneral("FunctionalPropertyUnion")<FunctionalPropertyUnion>(
        FunctionalPropertyUnion
    )<typia.PascalCase<FunctionalPropertyUnion>>({
        convert: (input) => typia.notations.validatePascal<FunctionalPropertyUnion>(input),
        assert: typia.createAssert<typia.PascalCase<FunctionalPropertyUnion>>(),
    });
