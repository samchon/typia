import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagTuple } from "../../structures/TagTuple";

export const test_clone_TagTuple = _test_clone(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.clone<TagTuple>(input),
);
