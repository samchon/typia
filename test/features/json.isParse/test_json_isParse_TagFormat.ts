import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_isParse_TagFormat = _test_json_isParse(
    "TagFormat",
)<TagFormat>(TagFormat)((input) => typia.json.isParse<TagFormat>(input));
