import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createStringify_ToJsonNull = _test_stringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createStringify<ToJsonNull>(),
);
