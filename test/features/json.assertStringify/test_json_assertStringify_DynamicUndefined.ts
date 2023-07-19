import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_assertStringify_DynamicUndefined =
    _test_json_assertStringify<DynamicUndefined>(DynamicUndefined)((input) =>
        typia.json.assertStringify(input),
    );
