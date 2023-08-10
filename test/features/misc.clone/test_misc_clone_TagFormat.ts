import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_clone_TagFormat = _test_misc_clone<TagFormat>(TagFormat)(
    (input) => typia.misc.clone<TagFormat>(input),
);
