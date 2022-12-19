import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ToJsonNull = _test_assertStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createAssertStringify<ToJsonNull>(),
);