import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_validateSnake_ConstantIntersection =
    _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection
    )<typia.SnakeCase<ConstantIntersection>>({
        convert: typia.notations.createValidateSnake<ConstantIntersection>(),
        assert: typia.createAssert<typia.SnakeCase<ConstantIntersection>>(),
    });
