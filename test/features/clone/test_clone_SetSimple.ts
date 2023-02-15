import typia from "typia";

import { SetSimple } from "../../structures/SetSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_SetSimple = _test_clone(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.clone(input),
);
