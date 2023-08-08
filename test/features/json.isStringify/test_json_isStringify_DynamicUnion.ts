import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_isStringify_DynamicUnion = _test_json_isStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.json.isStringify(input),
    DynamicUnion.SPOILERS,
);
