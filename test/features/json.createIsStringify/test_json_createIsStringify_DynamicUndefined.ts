import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_isStringify_DynamicUndefined = _test_json_isStringify(
    "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(
    typia.json.createIsStringify<DynamicUndefined>(),
);
