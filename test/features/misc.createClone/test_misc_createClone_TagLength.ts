import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagLength } from "../../structures/TagLength";

export const test_misc_clone_TagLength = _test_misc_clone(
    "TagLength",
    TagLength.generate,
    typia.misc.createClone<TagLength>(),
);
