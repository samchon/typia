import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_isPrune_TagMatrix = _test_isPrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.isPrune(input),
    TagMatrix.SPOILERS,
);
