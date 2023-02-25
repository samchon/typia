import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagTuple = _test_clone(
    "TagTuple",
    TagTuple.generate,
    typia.createClone<TagTuple>(),
);
