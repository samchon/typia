import typia from "typia";

import { SetSimple } from "../../structures/SetSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_SetSimple = _test_validate(
    "SetSimple",
    SetSimple.generate,
    typia.createValidate<SetSimple>(),
    SetSimple.SPOILERS,
);
