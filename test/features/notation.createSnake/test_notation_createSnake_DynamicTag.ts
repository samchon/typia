import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_notation_createValidateSnake_DynamicTag =
    _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
        typia.SnakeCase<DynamicTag>
    >({
        convert: typia.notations.createValidateSnake<DynamicTag>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicTag>>(),
    });
