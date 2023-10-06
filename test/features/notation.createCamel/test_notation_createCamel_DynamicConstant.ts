import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_notation_createValidateCamel_DynamicConstant =
    _test_notation_validateGeneral("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )<typia.CamelCase<DynamicConstant>>({
        convert: typia.notations.createValidateCamel<DynamicConstant>(),
        assert: typia.createAssert<typia.CamelCase<DynamicConstant>>(),
    });
