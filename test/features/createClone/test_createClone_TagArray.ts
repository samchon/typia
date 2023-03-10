import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagArray } from "../../structures/TagArray";

export const test_createClone_TagArray = _test_clone(
    "TagArray",
    TagArray.generate,
    typia.createClone<TagArray>(),
);
