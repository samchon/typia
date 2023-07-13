import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_isStringify_ToJsonArray = _test_json_isStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.json.isStringify(input),
);
