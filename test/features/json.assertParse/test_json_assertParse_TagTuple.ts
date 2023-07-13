import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_assertParse_TagTuple = _test_json_assertParse(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.json.assertParse<TagTuple>(input),
    TagTuple.SPOILERS,
);
