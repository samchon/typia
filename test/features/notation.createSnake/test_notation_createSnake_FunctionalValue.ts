import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_notation_createValidateSnake_FunctionalValue =
    _test_notation_validateGeneral("FunctionalValue")<FunctionalValue>(
        FunctionalValue
    )<typia.SnakeCase<FunctionalValue>>({
        convert: (input) => typia.notations.validateSnake<FunctionalValue>(input),
        assert: typia.createAssert<typia.SnakeCase<FunctionalValue>>(),
    });
