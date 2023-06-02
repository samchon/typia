import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createIsPrune_TagMatrix = _test_isPrune(
    "TagMatrix",
    TagMatrix.generate,
    typia.createIsPrune<TagMatrix>(),
    TagMatrix.SPOILERS,
);
