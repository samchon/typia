import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagArray } from "../../structures/TagArray";

export const test_json_isStringify_TagArray = _test_json_isStringify<TagArray>(
    TagArray,
)((input) => typia.json.isStringify<TagArray>(input));
