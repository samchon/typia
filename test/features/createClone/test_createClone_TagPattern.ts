import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagPattern = _test_clone(
    "TagPattern",
    TagPattern.generate,
    typia.createClone<TagPattern>(),
);