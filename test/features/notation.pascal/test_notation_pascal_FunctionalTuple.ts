import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_notation_validatePascal_FunctionalTuple =
    _test_notation_validateGeneral("FunctionalTuple")<FunctionalTuple>(
        FunctionalTuple
    )<typia.PascalCase<FunctionalTuple>>({
        convert: typia.notations.createValidatePascal<FunctionalTuple>(),
        assert: typia.createAssert<typia.PascalCase<FunctionalTuple>>(),
    });
