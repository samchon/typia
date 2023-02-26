import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createIsPrune_TagObjectUnion = _test_isPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createIsPrune<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
