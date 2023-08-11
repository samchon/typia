import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_stringify_TagDefault = _test_json_stringify<TagDefault>(
    TagDefault,
)((input) => typia.json.stringify<TagDefault>(input));
