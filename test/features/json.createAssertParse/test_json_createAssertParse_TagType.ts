import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagType } from "../../structures/TagType";

export const test_json_assertParse_TagType = _test_json_assertParse(
    "TagType",
)<TagType>(TagType)(typia.json.createAssertParse<TagType>());
