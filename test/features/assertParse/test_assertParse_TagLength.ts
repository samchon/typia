import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagLength } from "../../structures/TagLength";

export const test_assertParse_TagLength = _test_assertParse(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertParse<TagLength>(input),
    TagLength.SPOILERS,
);
