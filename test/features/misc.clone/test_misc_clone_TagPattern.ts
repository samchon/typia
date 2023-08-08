import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_clone_TagPattern = _test_misc_clone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.misc.clone(input),
);
