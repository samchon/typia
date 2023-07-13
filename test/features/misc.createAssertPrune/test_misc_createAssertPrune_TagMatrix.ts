import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_assertPrune_TagMatrix = _test_misc_assertPrune(
    "TagMatrix",
    TagMatrix.generate,
    typia.misc.createAssertPrune<TagMatrix>(),
    TagMatrix.SPOILERS,
);
