import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_isStringify_TagDefault = _test_json_isStringify(
    "TagDefault",
)<TagDefault>(TagDefault)(typia.json.createIsStringify<TagDefault>());
