import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_notation_createValidateCamel_ToJsonDouble =
    _test_notation_validateGeneral("ToJsonDouble")<ToJsonDouble>(
        ToJsonDouble
    )<typia.CamelCase<ToJsonDouble>>({
        convert: (input) => typia.notations.validateCamel<ToJsonDouble>(input),
        assert: typia.createAssert<typia.CamelCase<ToJsonDouble>>(),
    });
