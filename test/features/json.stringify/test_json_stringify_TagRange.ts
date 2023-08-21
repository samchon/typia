import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagRange } from "../../structures/TagRange";

export const test_json_stringify_TagRange = _test_json_stringify(
    "TagRange",
)<TagRange>(TagRange)((input) => typia.json.stringify<TagRange>(input));
