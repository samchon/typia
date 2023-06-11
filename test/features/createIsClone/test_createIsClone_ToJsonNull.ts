import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createIsClone_ToJsonNull = _test_isClone(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createIsClone<ToJsonNull>(),
);
