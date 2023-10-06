import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_notation_createValidateSnake_ToJsonAtomicSimple =
    _test_notation_validateGeneral("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
        ToJsonAtomicSimple
    )<typia.SnakeCase<ToJsonAtomicSimple>>({
        convert: (input) => typia.notations.validateSnake<ToJsonAtomicSimple>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonAtomicSimple>>(),
    });
