import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_notation_createValidatePascal_DynamicTemplate =
    _test_notation_validateGeneral("DynamicTemplate")<DynamicTemplate>(
        DynamicTemplate
    )<typia.PascalCase<DynamicTemplate>>({
        convert: (input) => typia.notations.validatePascal<DynamicTemplate>(input),
        assert: typia.createAssert<typia.PascalCase<DynamicTemplate>>(),
    });
