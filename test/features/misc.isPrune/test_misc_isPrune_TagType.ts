import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagType } from "../../structures/TagType";

export const test_misc_isPrune_TagType = _test_misc_isPrune<TagType>(TagType)(
    (input) => typia.misc.isPrune<TagType>(input),
);
