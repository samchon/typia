import typia from "../../../src";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ToJsonNull = _test_assert(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.assert(input),
);
