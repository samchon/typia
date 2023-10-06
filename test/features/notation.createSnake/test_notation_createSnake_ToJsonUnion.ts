import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_notation_createValidateSnake_ToJsonUnion =
    _test_notation_validateGeneral("ToJsonUnion")<ToJsonUnion>(
        ToJsonUnion
    )<typia.SnakeCase<ToJsonUnion>>({
        convert: (input) => typia.notations.validateSnake<ToJsonUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonUnion>>(),
    });
