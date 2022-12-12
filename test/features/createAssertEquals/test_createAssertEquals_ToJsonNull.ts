import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonNull = _test_assertEquals(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createAssertEquals<ToJsonNull>(),
);
