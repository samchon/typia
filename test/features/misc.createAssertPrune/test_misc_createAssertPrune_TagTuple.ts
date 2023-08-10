import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_assertPrune_TagTuple = _test_misc_assertPrune<TagTuple>(
    TagTuple,
)(typia.misc.createAssertPrune<TagTuple>());
