import typia from "typia";

import { SetAlias } from "../../structures/SetAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_SetAlias = _test_assert(
    "SetAlias",
    SetAlias.generate,
    typia.createAssert<SetAlias>(),
    SetAlias.SPOILERS,
);
