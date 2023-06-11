import typia from "../../../src";

import { SetSimple } from "../../structures/SetSimple";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_SetSimple = _test_clone(
    "SetSimple",
    SetSimple.generate,
    typia.createClone<SetSimple>(),
);
