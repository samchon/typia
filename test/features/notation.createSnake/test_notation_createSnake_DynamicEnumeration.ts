import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_notation_createValidateSnake_DynamicEnumeration =
    _test_notation_validateGeneral("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration
    )<typia.SnakeCase<DynamicEnumeration>>({
        convert: (input) => typia.notations.validateSnake<DynamicEnumeration>(input),
        assert: typia.createAssert<typia.SnakeCase<DynamicEnumeration>>(),
    });
