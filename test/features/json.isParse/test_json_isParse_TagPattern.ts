import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_isParse_TagPattern = _test_json_isParse(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.json.isParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
