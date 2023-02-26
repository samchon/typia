import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ToJsonNull = _test_isStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createIsStringify<ToJsonNull>(),
);
