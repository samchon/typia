import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createAssertPrune_TagMatrix = _test_assertPrune(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertPrune<TagMatrix>(),
    TagMatrix.SPOILERS,
);
