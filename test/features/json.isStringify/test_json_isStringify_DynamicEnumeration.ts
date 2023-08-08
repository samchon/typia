import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_isStringify_DynamicEnumeration = _test_json_isStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.json.isStringify(input),
    DynamicEnumeration.SPOILERS,
);
