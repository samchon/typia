import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagType } from "../../structures/TagType";

export const test_json_isStringify_TagType = _test_json_isStringify<TagType>(
    TagType,
)((input) => typia.json.isStringify(input));
