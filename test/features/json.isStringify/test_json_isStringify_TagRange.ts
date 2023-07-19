import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagRange } from "../../structures/TagRange";

export const test_json_isStringify_TagRange = _test_json_isStringify<TagRange>(
    TagRange,
)((input) => typia.json.isStringify(input));
