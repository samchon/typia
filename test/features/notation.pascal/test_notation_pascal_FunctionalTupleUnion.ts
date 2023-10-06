import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_notation_validatePascal_FunctionalTupleUnion =
    _test_notation_validateGeneral("FunctionalTupleUnion")<FunctionalTupleUnion>(
        FunctionalTupleUnion
    )<typia.PascalCase<FunctionalTupleUnion>>({
        convert: typia.notations.createValidatePascal<FunctionalTupleUnion>(),
        assert: typia.createAssert<typia.PascalCase<FunctionalTupleUnion>>(),
    });
