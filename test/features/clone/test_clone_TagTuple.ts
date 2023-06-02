import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_TagTuple = _test_clone(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.clone(input),
);
