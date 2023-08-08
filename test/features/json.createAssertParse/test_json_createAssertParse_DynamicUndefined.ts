import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_assertParse_DynamicUndefined = _test_json_assertParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.json.createAssertParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
