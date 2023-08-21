import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagLength } from "../../structures/TagLength";

export const test_json_isParse_TagLength = _test_json_isParse(
    "TagLength",
)<TagLength>(TagLength)(typia.json.createIsParse<TagLength>());
