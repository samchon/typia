import typia from "typia";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonNull = _test_clone(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createClone<ToJsonNull>(),
);
