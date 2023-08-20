import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_validateClone_TagTuple = _test_validateClone(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validateClone<TagTuple>(input),
    TagTuple.SPOILERS,
);
