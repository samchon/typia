import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { SetAlias } from "../../structures/SetAlias";

export const test_clone_SetAlias = _test_clone(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.clone(input),
);
