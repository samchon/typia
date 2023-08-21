import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_isStringify_TagPattern = _test_json_isStringify(
    "TagPattern",
)<TagPattern>(TagPattern)(typia.json.createIsStringify<TagPattern>());
