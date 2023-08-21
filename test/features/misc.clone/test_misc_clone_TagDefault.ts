import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_clone_TagDefault = _test_misc_clone(
    "TagDefault",
)<TagDefault>(TagDefault)((input) => typia.misc.clone<TagDefault>(input));
