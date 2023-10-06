import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_notation_createValidatePascal_ObjectInternal =
    _test_notation_validateGeneral("ObjectInternal")<ObjectInternal>(
        ObjectInternal
    )<typia.PascalCase<ObjectInternal>>({
        convert: (input) => typia.notations.validatePascal<ObjectInternal>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectInternal>>(),
    });
