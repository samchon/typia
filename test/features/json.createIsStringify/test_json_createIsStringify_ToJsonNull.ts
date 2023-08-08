import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_isStringify_ToJsonNull = _test_json_isStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.json.createIsStringify<ToJsonNull>(),
);
