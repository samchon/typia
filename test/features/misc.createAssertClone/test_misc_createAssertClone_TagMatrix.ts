import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_assertClone_TagMatrix = _test_misc_assertClone(
    "TagMatrix",
)<TagMatrix>(TagMatrix)(typia.misc.createAssertClone<TagMatrix>());
