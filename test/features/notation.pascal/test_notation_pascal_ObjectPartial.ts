import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_validatePascal_ObjectPartial =
    _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(
        ObjectPartial
    )<typia.PascalCase<ObjectPartial>>({
        convert: typia.notations.createValidatePascal<ObjectPartial>(),
        assert: typia.createAssert<typia.PascalCase<ObjectPartial>>(),
    });
