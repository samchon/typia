import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertStringify_ToJsonNull = _test_assertStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createAssertStringify<ToJsonNull>(),
);
