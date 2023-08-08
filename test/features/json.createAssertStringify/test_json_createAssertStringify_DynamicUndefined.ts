import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_assertStringify_DynamicUndefined =
    _test_json_assertStringify(
        "DynamicUndefined",
        DynamicUndefined.generate,
        typia.json.createAssertStringify<DynamicUndefined>(),
        DynamicUndefined.SPOILERS,
    );
