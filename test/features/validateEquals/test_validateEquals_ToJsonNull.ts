import typia from "../../../src";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ToJsonNull = _test_validateEquals(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.validateEquals(input),
);
