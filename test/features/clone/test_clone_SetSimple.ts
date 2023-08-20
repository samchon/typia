import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { SetSimple } from "../../structures/SetSimple";

export const test_clone_SetSimple = _test_clone(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.clone<SetSimple>(input),
);
