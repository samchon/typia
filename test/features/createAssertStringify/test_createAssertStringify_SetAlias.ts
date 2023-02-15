import typia from "typia";

import { SetAlias } from "../../structures/SetAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_SetAlias = _test_assertStringify(
    "SetAlias",
    SetAlias.generate,
    typia.createAssertStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
