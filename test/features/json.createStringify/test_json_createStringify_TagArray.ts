import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagArray } from "../../structures/TagArray";

export const test_json_stringify_TagArray = _test_json_stringify(
    "TagArray",
)<TagArray>(TagArray)(typia.json.createStringify<TagArray>());
