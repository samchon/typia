import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertClone_ToJsonNull = _test_assertClone(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createAssertClone<ToJsonNull>(),
);
