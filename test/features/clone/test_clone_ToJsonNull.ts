import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_clone_ToJsonNull = _test_clone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.clone(input),
);
