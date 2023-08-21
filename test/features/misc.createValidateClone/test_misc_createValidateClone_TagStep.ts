import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagStep } from "../../structures/TagStep";

export const test_misc_validateClone_TagStep = _test_misc_validateClone(
    "TagStep",
)<TagStep>(TagStep)(typia.misc.createValidateClone<TagStep>());
