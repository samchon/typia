import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { SetUnion } from "../../structures/SetUnion";

export const test_clone_SetUnion = _test_clone(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.clone<SetUnion>(input),
);
