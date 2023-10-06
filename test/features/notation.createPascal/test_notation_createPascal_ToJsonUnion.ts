import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_notation_createValidatePascal_ToJsonUnion =
    _test_notation_validateGeneral("ToJsonUnion")<ToJsonUnion>(
        ToJsonUnion
    )<typia.PascalCase<ToJsonUnion>>({
        convert: (input) => typia.notations.validatePascal<ToJsonUnion>(input),
        assert: typia.createAssert<typia.PascalCase<ToJsonUnion>>(),
    });
