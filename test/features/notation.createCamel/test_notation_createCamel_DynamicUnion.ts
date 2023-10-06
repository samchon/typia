import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_notation_createValidateCamel_DynamicUnion =
    _test_notation_validateGeneral("DynamicUnion")<DynamicUnion>(
        DynamicUnion
    )<typia.CamelCase<DynamicUnion>>({
        convert: (input) => typia.notations.validateCamel<DynamicUnion>(input),
        assert: typia.createAssert<typia.CamelCase<DynamicUnion>>(),
    });
