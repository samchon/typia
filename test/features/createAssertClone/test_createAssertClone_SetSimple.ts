import typia from "../../../src";

import { SetSimple } from "../../structures/SetSimple";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_SetSimple = _test_assertClone(
    "SetSimple",
    SetSimple.generate,
    typia.createAssertClone<SetSimple>(),
    SetSimple.SPOILERS,
);
