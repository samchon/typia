import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_notation_validateSnake_FunctionalValueUnion =
    _test_notation_validateGeneral("FunctionalValueUnion")<FunctionalValueUnion>(
        FunctionalValueUnion
    )<typia.SnakeCase<FunctionalValueUnion>>({
        convert: typia.notations.createValidateSnake<FunctionalValueUnion>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalValueUnion>>(),
    });
