import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagArray } from "../../structures/TagArray";

export const test_misc_clone_TagArray = _test_misc_clone("TagArray")<TagArray>(
    TagArray,
)(typia.misc.createClone<TagArray>());
