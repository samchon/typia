import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_clone_TagMatrix = _test_misc_clone<TagMatrix>(TagMatrix)(
    (input) => typia.misc.clone(input),
);
