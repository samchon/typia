import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_notation_validateCamel_FunctionalArrayUnion =
    _test_notation_validateGeneral("FunctionalArrayUnion")<FunctionalArrayUnion>(
        FunctionalArrayUnion
    )<typia.CamelCase<FunctionalArrayUnion>>({
        convert: typia.notations.createValidateCamel<FunctionalArrayUnion>(),
        assert: typia.createAssert<typia.CamelCase<FunctionalArrayUnion>>(),
    });
