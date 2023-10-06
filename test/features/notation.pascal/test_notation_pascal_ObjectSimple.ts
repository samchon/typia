import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_validatePascal_ObjectSimple =
    _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(
        ObjectSimple
    )<typia.PascalCase<ObjectSimple>>({
        convert: typia.notations.createValidatePascal<ObjectSimple>(),
        assert: typia.createAssert<typia.PascalCase<ObjectSimple>>(),
    });
