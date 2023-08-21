import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_assertParse_TagDefault = _test_json_assertParse(
    "TagDefault",
)<TagDefault>(TagDefault)(typia.json.createAssertParse<TagDefault>());
