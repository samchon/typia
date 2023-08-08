import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagArray } from "../../structures/TagArray";

export const test_json_assertParse_TagArray = _test_json_assertParse(
    "TagArray",
    TagArray.generate,
    (input) => typia.json.assertParse<TagArray>(input),
    TagArray.SPOILERS,
);
