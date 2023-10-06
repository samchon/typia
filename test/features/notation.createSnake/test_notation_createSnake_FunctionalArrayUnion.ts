import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_notation_createValidateSnake_FunctionalArrayUnion =
    _test_notation_validateGeneral("FunctionalArrayUnion")<FunctionalArrayUnion>(
        FunctionalArrayUnion
    )<typia.SnakeCase<FunctionalArrayUnion>>({
        convert: (input) => typia.notations.validateSnake<FunctionalArrayUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<FunctionalArrayUnion>>(),
    });
