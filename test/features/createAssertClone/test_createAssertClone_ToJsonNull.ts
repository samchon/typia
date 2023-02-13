import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ToJsonNull = _test_assertClone(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createAssertClone<ToJsonNull>(),
);