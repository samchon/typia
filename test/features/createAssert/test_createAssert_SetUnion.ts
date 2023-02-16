import typia from "typia";

import { SetUnion } from "../../structures/SetUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_SetUnion = _test_assert(
    "SetUnion",
    SetUnion.generate,
    typia.createAssert<SetUnion>(),
    SetUnion.SPOILERS,
);
