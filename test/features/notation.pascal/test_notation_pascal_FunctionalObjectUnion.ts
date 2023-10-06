import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_notation_validatePascal_FunctionalObjectUnion =
    _test_notation_validateGeneral("FunctionalObjectUnion")<FunctionalObjectUnion>(
        FunctionalObjectUnion
    )<typia.PascalCase<FunctionalObjectUnion>>({
        convert: typia.notations.createValidatePascal<FunctionalObjectUnion>(),
        assert: typia.createAssert<typia.PascalCase<FunctionalObjectUnion>>(),
    });
