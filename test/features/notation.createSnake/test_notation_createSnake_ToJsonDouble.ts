import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_notation_createValidateSnake_ToJsonDouble =
    _test_notation_validateGeneral("ToJsonDouble")<ToJsonDouble>(
        ToJsonDouble
    )<typia.SnakeCase<ToJsonDouble>>({
        convert: (input) => typia.notations.validateSnake<ToJsonDouble>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonDouble>>(),
    });
