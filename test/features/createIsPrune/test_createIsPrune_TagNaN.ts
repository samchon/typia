import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_createIsPrune_TagNaN = _test_isPrune(
    "TagNaN",
    TagNaN.generate,
    typia.createIsPrune<TagNaN>(),
    TagNaN.SPOILERS,
);
