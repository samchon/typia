import typia from "../../../src";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ToJsonDouble = _test_validateEquals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createValidateEquals<ToJsonDouble>(),
);
