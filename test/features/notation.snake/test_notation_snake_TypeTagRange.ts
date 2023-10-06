import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_validateSnake_TypeTagRange =
    _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(
        TypeTagRange
    )<typia.SnakeCase<TypeTagRange>>({
        convert: typia.notations.createValidateSnake<TypeTagRange>(),
        assert: typia.createAssert<typia.SnakeCase<TypeTagRange>>(),
    });
