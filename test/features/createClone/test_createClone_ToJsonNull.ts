import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createClone_ToJsonNull = _test_clone(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createClone<ToJsonNull>(),
);
