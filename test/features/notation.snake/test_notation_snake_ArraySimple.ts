import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_validateSnake_ArraySimple =
    _test_notation_validateGeneral("ArraySimple")<ArraySimple>(
        ArraySimple
    )<typia.SnakeCase<ArraySimple>>({
        convert: typia.notations.createValidateSnake<ArraySimple>(),
        assert: typia.createAssert<typia.SnakeCase<ArraySimple>>(),
    });
