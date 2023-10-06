import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_notation_createValidatePascal_FunctionalObjectUnion =
    _test_notation_validateGeneral("FunctionalObjectUnion")<FunctionalObjectUnion>(
        FunctionalObjectUnion
    )<typia.PascalCase<FunctionalObjectUnion>>({
        convert: (input) => typia.notations.validatePascal<FunctionalObjectUnion>(input),
        assert: typia.createAssert<typia.PascalCase<FunctionalObjectUnion>>(),
    });
