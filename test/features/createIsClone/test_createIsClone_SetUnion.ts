import typia from "typia";

import { SetUnion } from "../../structures/SetUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_SetUnion = _test_isClone(
    "SetUnion",
    SetUnion.generate,
    typia.createIsClone<SetUnion>(),
    SetUnion.SPOILERS,
);
