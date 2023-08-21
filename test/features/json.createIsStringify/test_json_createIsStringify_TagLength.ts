import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagLength } from "../../structures/TagLength";

export const test_json_isStringify_TagLength = _test_json_isStringify(
    "TagLength",
)<TagLength>(TagLength)(typia.json.createIsStringify<TagLength>());
