import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_isStringify_TagCustom = _test_json_isStringify(
    "TagCustom",
)<TagCustom>(TagCustom)(typia.json.createIsStringify<TagCustom>());
