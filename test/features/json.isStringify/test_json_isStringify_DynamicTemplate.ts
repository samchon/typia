import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_isStringify_DynamicTemplate = _test_json_isStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.json.isStringify(input),
    DynamicTemplate.SPOILERS,
);
