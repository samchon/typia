import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_notation_validateSnake_ToJsonUnion =
    _test_notation_validateGeneral("ToJsonUnion")<ToJsonUnion>(
        ToJsonUnion
    )<typia.SnakeCase<ToJsonUnion>>({
        convert: typia.notations.createValidateSnake<ToJsonUnion>(),
        assert: typia.createAssert<typia.SnakeCase<ToJsonUnion>>(),
    });
