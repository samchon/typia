import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_notation_validateSnake_DynamicTree =
    _test_notation_validateGeneral("DynamicTree")<DynamicTree>(
        DynamicTree
    )<typia.SnakeCase<DynamicTree>>({
        convert: typia.notations.createValidateSnake<DynamicTree>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicTree>>(),
    });
