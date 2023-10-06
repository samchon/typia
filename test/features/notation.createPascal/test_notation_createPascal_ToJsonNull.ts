import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_notation_createValidatePascal_ToJsonNull =
    _test_notation_validateGeneral("ToJsonNull")<ToJsonNull>(
        ToJsonNull
    )<typia.PascalCase<ToJsonNull>>({
        convert: (input) => typia.notations.validatePascal<ToJsonNull>(input),
        assert: typia.createAssert<typia.PascalCase<ToJsonNull>>(),
    });
