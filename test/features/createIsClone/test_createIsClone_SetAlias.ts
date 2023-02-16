import typia from "typia";

import { SetAlias } from "../../structures/SetAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_SetAlias = _test_isClone(
    "SetAlias",
    SetAlias.generate,
    typia.createIsClone<SetAlias>(),
    SetAlias.SPOILERS,
);
