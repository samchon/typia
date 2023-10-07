import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_notation_validatePascal_DynamicJsonValue =
    _test_notation_validateGeneral("DynamicJsonValue")<DynamicJsonValue>(
        DynamicJsonValue,
    )<typia.PascalCase<DynamicJsonValue>>({
        convert: (input) =>
            typia.notations.validatePascal<DynamicJsonValue>(input),
        assert: typia.createAssert<typia.PascalCase<DynamicJsonValue>>(),
    });
