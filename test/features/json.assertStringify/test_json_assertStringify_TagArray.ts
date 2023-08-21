import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagArray } from "../../structures/TagArray";

export const test_json_assertStringify_TagArray = _test_json_assertStringify(
    "TagArray",
)<TagArray>(TagArray)((input) => typia.json.assertStringify<TagArray>(input));
