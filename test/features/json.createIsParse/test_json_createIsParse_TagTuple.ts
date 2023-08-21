import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_isParse_TagTuple = _test_json_isParse(
    "TagTuple",
)<TagTuple>(TagTuple)(typia.json.createIsParse<TagTuple>());
