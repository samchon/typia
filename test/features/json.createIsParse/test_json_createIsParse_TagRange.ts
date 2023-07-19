import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagRange } from "../../structures/TagRange";

export const test_json_isParse_TagRange = _test_json_isParse<TagRange>(
    TagRange,
)(typia.json.createIsParse<TagRange>());
