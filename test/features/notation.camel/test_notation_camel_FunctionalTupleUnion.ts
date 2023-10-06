import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_notation_validateCamel_FunctionalTupleUnion =
    _test_notation_validateGeneral("FunctionalTupleUnion")<FunctionalTupleUnion>(
        FunctionalTupleUnion
    )<typia.CamelCase<FunctionalTupleUnion>>({
        convert: typia.notations.createValidateCamel<FunctionalTupleUnion>(),
        assert: typia.createAssert<typia.CamelCase<FunctionalTupleUnion>>(),
    });
