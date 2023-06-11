import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_isParse_TagMatrix = _test_isParse(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.isParse<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
