import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagType } from "../../structures/TagType";

export const test_json_isParse_TagType = _test_json_isParse("TagType")<TagType>(
    TagType,
)((input) => typia.json.isParse<TagType>(input));
