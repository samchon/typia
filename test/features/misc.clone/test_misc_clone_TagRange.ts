import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagRange } from "../../structures/TagRange";

export const test_misc_clone_TagRange = _test_misc_clone<TagRange>(TagRange)(
    (input) => typia.misc.clone<TagRange>(input),
);
