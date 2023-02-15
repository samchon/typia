import typia from "typia";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ToJsonArray = _test_assertClone(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createAssertClone<ToJsonArray>(),
);
