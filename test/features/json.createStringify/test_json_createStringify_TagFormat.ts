import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_stringify_TagFormat = _test_json_stringify(
    "TagFormat",
)<TagFormat>(TagFormat)(typia.json.createStringify<TagFormat>());
