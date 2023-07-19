import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_isParse_TagMatrix = _test_json_isParse<TagMatrix>(
    TagMatrix,
)((input) => typia.json.isParse<TagMatrix>(input));
