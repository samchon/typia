import typia from "typia";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ToJsonNull = _test_equals(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createEquals<ToJsonNull>(),
);
