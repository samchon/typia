import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_notation_createValidateCamel_ToJsonTuple =
    _test_notation_validateGeneral("ToJsonTuple")<ToJsonTuple>(
        ToJsonTuple
    )<typia.CamelCase<ToJsonTuple>>({
        convert: (input) => typia.notations.validateCamel<ToJsonTuple>(input),
        assert: typia.createAssert<typia.CamelCase<ToJsonTuple>>(),
    });
