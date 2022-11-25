import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_SetUnion = _test_clone(
    "SetUnion",
    SetUnion.generate,
    (input) => TSON.clone(input),
);