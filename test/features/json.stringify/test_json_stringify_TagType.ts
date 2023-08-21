import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagType } from "../../structures/TagType";

export const test_json_stringify_TagType = _test_json_stringify(
    "TagType",
)<TagType>(TagType)((input) => typia.json.stringify<TagType>(input));
