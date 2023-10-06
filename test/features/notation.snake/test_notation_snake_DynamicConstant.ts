import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_notation_validateSnake_DynamicConstant =
    _test_notation_validateGeneral("DynamicConstant")<DynamicConstant>(
        DynamicConstant
    )<typia.SnakeCase<DynamicConstant>>({
        convert: typia.notations.createValidateSnake<DynamicConstant>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicConstant>>(),
    });
