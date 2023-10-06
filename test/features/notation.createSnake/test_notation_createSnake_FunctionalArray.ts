import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_notation_createValidateSnake_FunctionalArray =
    _test_notation_validateGeneral("FunctionalArray")<FunctionalArray>(
        FunctionalArray
    )<typia.SnakeCase<FunctionalArray>>({
        convert: (input) => typia.notations.validateSnake<FunctionalArray>(input),
        assert: typia.createAssert<typia.SnakeCase<FunctionalArray>>(),
    });
