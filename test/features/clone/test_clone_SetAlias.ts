import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_SetAlias = _test_clone(
    "SetAlias",
    SetAlias.generate,
    (input) => TSON.clone(input),
);