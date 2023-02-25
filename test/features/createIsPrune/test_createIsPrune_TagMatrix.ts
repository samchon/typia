import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagMatrix = _test_isPrune(
    "TagMatrix",
    TagMatrix.generate,
    typia.createIsPrune<TagMatrix>(),
    TagMatrix.SPOILERS,
);
