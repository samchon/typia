import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagMatrix = _test_clone(
    "TagMatrix",
    TagMatrix.generate,
    typia.createClone<TagMatrix>(),
);