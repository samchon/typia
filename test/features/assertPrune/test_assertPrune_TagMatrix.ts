import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_assertPrune_TagMatrix = _test_assertPrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assertPrune<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
