import typia from "../../../src";

import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ToJsonUndefined = _test_validateEquals(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => typia.validateEquals(input),
);
