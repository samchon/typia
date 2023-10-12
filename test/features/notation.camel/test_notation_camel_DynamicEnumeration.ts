import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_notation_validateCamel_DynamicEnumeration =
    _test_notation_validateGeneral("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )<typia.CamelCase<DynamicEnumeration>>({
        convert: (input) =>
            typia.notations.validateCamel<DynamicEnumeration>(input),
        assert: typia.createAssert<typia.CamelCase<DynamicEnumeration>>(),
    });
