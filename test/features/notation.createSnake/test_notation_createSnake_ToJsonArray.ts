import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_notation_createValidateSnake_ToJsonArray =
    _test_notation_validateGeneral("ToJsonArray")<ToJsonArray>(
        ToJsonArray
    )<typia.SnakeCase<ToJsonArray>>({
        convert: (input) => typia.notations.validateSnake<ToJsonArray>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonArray>>(),
    });
