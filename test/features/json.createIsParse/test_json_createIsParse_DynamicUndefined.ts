import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_isParse_DynamicUndefined = _test_json_isParse(
    "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(
    typia.json.createIsParse<DynamicUndefined>(),
);
