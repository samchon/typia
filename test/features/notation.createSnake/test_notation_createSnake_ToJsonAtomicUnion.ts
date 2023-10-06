import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_notation_createValidateSnake_ToJsonAtomicUnion =
    _test_notation_validateGeneral("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
        ToJsonAtomicUnion
    )<typia.SnakeCase<ToJsonAtomicUnion>>({
        convert: (input) => typia.notations.validateSnake<ToJsonAtomicUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonAtomicUnion>>(),
    });
