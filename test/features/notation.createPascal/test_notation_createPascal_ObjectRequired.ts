import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_createValidatePascal_ObjectRequired =
    _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
        ObjectRequired
    )<typia.PascalCase<ObjectRequired>>({
        convert: (input) => typia.notations.validatePascal<ObjectRequired>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectRequired>>(),
    });
