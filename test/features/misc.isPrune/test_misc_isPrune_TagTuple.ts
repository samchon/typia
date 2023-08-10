import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_isPrune_TagTuple = _test_misc_isPrune<TagTuple>(
    TagTuple,
)((input) => typia.misc.isPrune<TagTuple>(input));
