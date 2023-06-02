import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { SetSimple } from "../../structures/SetSimple";

export const test_createClone_SetSimple = _test_clone(
    "SetSimple",
    SetSimple.generate,
    typia.createClone<SetSimple>(),
);
