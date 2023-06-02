import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagType } from "../../structures/TagType";

export const test_createIsPrune_TagType = _test_isPrune(
    "TagType",
    TagType.generate,
    typia.createIsPrune<TagType>(),
    TagType.SPOILERS,
);
