import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagArray } from "../../structures/TagArray";

export const test_json_isParse_TagArray = _test_json_isParse<TagArray>(
    TagArray,
)(typia.json.createIsParse<TagArray>());
