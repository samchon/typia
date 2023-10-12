import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_notation_createValidateCamel_DynamicTree =
    _test_notation_validateGeneral("DynamicTree")<DynamicTree>(DynamicTree)<
        typia.CamelCase<DynamicTree>
    >({
        convert: typia.notations.createValidateCamel<DynamicTree>(),
        assert: typia.createAssert<typia.CamelCase<DynamicTree>>(),
    });
