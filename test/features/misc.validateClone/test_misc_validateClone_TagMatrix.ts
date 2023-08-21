import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_validateClone_TagMatrix = _test_misc_validateClone(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input) => typia.misc.validateClone<TagMatrix>(input));
