import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_clone_TagTuple = _test_misc_clone(
    "TagTuple",
    TagTuple.generate,
    typia.misc.createClone<TagTuple>(),
);
