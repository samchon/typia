import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagStep } from "../../structures/TagStep";

export const test_misc_assertClone_TagStep = _test_misc_assertClone(
    "TagStep",
)<TagStep>(TagStep)(typia.misc.createAssertClone<TagStep>());
