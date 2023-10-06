import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_notation_validateSnake_DynamicSimple =
    _test_notation_validateGeneral("DynamicSimple")<DynamicSimple>(
        DynamicSimple
    )<typia.SnakeCase<DynamicSimple>>({
        convert: typia.notations.createValidateSnake<DynamicSimple>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicSimple>>(),
    });
