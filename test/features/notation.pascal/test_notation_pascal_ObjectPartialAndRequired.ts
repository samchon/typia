import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_validatePascal_ObjectPartialAndRequired =
    _test_notation_validateGeneral("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
        ObjectPartialAndRequired
    )<typia.PascalCase<ObjectPartialAndRequired>>({
        convert: typia.notations.createValidatePascal<ObjectPartialAndRequired>(),
        assert: typia.createAssert<typia.PascalCase<ObjectPartialAndRequired>>(),
    });
