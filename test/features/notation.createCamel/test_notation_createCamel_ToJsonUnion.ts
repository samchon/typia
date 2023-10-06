import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_notation_createValidateCamel_ToJsonUnion =
    _test_notation_validateGeneral("ToJsonUnion")<ToJsonUnion>(
        ToJsonUnion
    )<typia.CamelCase<ToJsonUnion>>({
        convert: (input) => typia.notations.validateCamel<ToJsonUnion>(input),
        assert: typia.createAssert<typia.CamelCase<ToJsonUnion>>(),
    });
