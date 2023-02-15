import typia from "typia";

import { SetSimple } from "../../structures/SetSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_SetSimple = _test_validateClone(
    "SetSimple",
    SetSimple.generate,
    typia.createValidateClone<SetSimple>(),
    SetSimple.SPOILERS,
);
