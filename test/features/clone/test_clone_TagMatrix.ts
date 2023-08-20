import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_clone_TagMatrix = _test_clone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.clone<TagMatrix>(input),
);
