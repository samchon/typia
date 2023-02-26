import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagTuple } from "../../structures/TagTuple";

export const test_createClone_TagTuple = _test_clone(
    "TagTuple",
    TagTuple.generate,
    typia.createClone<TagTuple>(),
);
