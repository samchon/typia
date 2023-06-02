import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_createIsPrune_TagInfinite = _test_isPrune(
    "TagInfinite",
    TagInfinite.generate,
    typia.createIsPrune<TagInfinite>(),
    TagInfinite.SPOILERS,
);
