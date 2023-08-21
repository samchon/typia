import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_isPrune_TagMatrix = _test_misc_isPrune(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input) => typia.misc.isPrune<TagMatrix>(input));
