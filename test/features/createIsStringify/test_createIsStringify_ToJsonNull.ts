import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createIsStringify_ToJsonNull = _test_isStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createIsStringify<ToJsonNull>(),
);
