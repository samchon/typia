import typia from "../../../src";

import { SetSimple } from "../../structures/SetSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_SetSimple = _test_validate(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.validate(input),
    SetSimple.SPOILERS,
);
