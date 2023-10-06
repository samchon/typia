import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_notation_validateCamel_ToJsonTuple =
    _test_notation_validateGeneral("ToJsonTuple")<ToJsonTuple>(
        ToJsonTuple
    )<typia.CamelCase<ToJsonTuple>>({
        convert: typia.notations.createValidateCamel<ToJsonTuple>(),
        assert: typia.createAssert<typia.CamelCase<ToJsonTuple>>(),
    });
