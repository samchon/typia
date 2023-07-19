import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_assertStringify_DynamicTemplate =
    _test_json_assertStringify<DynamicTemplate>(DynamicTemplate)((input) =>
        typia.json.assertStringify(input),
    );
