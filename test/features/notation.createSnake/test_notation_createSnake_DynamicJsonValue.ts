import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_notation_createValidateSnake_DynamicJsonValue =
    _test_notation_validateGeneral("DynamicJsonValue")<DynamicJsonValue>(
        DynamicJsonValue,
    )<typia.SnakeCase<DynamicJsonValue>>({
        convert: typia.notations.createValidateSnake<DynamicJsonValue>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicJsonValue>>(),
    });
