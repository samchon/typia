import typia from "../../../src";

import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ToJsonUndefined = _test_assert(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createAssert<ToJsonUndefined>(),
);
