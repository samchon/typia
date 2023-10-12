import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_notation_createValidateSnake_DynamicUndefined =
    _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
        DynamicUndefined,
    )<typia.SnakeCase<DynamicUndefined>>({
        convert: typia.notations.createValidateSnake<DynamicUndefined>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicUndefined>>(),
    });
