import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_notation_createValidatePascal_DynamicEnumeration =
    _test_notation_validateGeneral("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )<typia.PascalCase<DynamicEnumeration>>({
        convert: typia.notations.createValidatePascal<DynamicEnumeration>(),
        assert: typia.createAssert<typia.PascalCase<DynamicEnumeration>>(),
    });
