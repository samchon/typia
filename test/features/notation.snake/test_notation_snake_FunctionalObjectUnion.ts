import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_notation_validateSnake_FunctionalObjectUnion =
    _test_notation_validateGeneral("FunctionalObjectUnion")<FunctionalObjectUnion>(
        FunctionalObjectUnion
    )<typia.SnakeCase<FunctionalObjectUnion>>({
        convert: typia.notations.createValidateSnake<FunctionalObjectUnion>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalObjectUnion>>(),
    });
