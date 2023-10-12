import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_notation_createValidatePascal_DynamicConstant =
    _test_notation_validateGeneral("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )<typia.PascalCase<DynamicConstant>>({
        convert: typia.notations.createValidatePascal<DynamicConstant>(),
        assert: typia.createAssert<typia.PascalCase<DynamicConstant>>(),
    });
