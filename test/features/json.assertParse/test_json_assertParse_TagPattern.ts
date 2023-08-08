import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_assertParse_TagPattern = _test_json_assertParse(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.json.assertParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
