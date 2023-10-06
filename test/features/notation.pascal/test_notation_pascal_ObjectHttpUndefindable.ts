import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_validatePascal_ObjectHttpUndefindable =
    _test_notation_validateGeneral("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable
    )<typia.PascalCase<ObjectHttpUndefindable>>({
        convert: typia.notations.createValidatePascal<ObjectHttpUndefindable>(),
        assert: typia.createAssert<typia.PascalCase<ObjectHttpUndefindable>>(),
    });
