import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_notation_validateSnake_ToJsonAtomicSimple =
    _test_notation_validateGeneral("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
        ToJsonAtomicSimple
    )<typia.SnakeCase<ToJsonAtomicSimple>>({
        convert: typia.notations.createValidateSnake<ToJsonAtomicSimple>(),
        assert: typia.createAssert<typia.SnakeCase<ToJsonAtomicSimple>>(),
    });
